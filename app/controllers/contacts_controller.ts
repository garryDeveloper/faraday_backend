import Contact from '#models/contact'
import ContactTransformer from '#transformers/contact_transformer'
import { createContactValidator, updateContactValidator } from '#validators/contact'
import type { HttpContext } from '@adonisjs/core/http'
import * as XLSX from 'xlsx'

export default class ContactsController {
  /**
   * @index
   * @description List all contacts (scoped by role)
   * @tags Contacts
   */
  async index({ auth, request, serialize }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const filterCompanyId = request.input('companyId')

    const query = Contact.query().preload('company')

    if (
      (currentUser.role === 'seller' || currentUser.role === 'supervisor') &&
      currentUser.companyId
    ) {
      query.where('companyId', currentUser.companyId)
    } else if (filterCompanyId) {
      query.where('companyId', filterCompanyId)
    }

    const paginated = await query.paginate(page, limit)

    return serialize(ContactTransformer.paginate(paginated.all(), paginated.getMeta()))
  }

  /**
   * @store
   * @description Create a new contact
   * @tags Contacts
   */
  async store({ auth, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { companyId, ...data } = await request.validateUsing(createContactValidator)

    if (currentUser.role === 'seller' || currentUser.role === 'supervisor') {
      if (companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Can only create contacts in your own company' },
        })
      }
    }

    const contact = await Contact.create({ ...data, companyId })
    await contact.load('company')

    return serialize(ContactTransformer.transform(contact))
  }

  /**
   * @show
   * @description Get a contact by ID
   * @tags Contacts
   */
  async show({ auth, params, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contact = await Contact.query().preload('company').where('id', params.id).first()

    if (!contact) {
      return response.notFound({ data: { message: 'Contact not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contact.companyId !== currentUser.companyId) {
        return response.forbidden({ data: { message: 'Contact does not belong to your company' } })
      }
    } else {
      if (contact.companyId !== currentUser.companyId) {
        return response.forbidden({ data: { message: 'Contact does not belong to your company' } })
      }
    }

    return serialize(ContactTransformer.transform(contact))
  }

  /**
   * @update
   * @description Update a contact
   * @tags Contacts
   */
  async update({ auth, params, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contact = await Contact.query().preload('company').where('id', params.id).first()

    if (!contact) {
      return response.notFound({ data: { message: 'Contact not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contact.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact does not belong to your company' },
        })
      }
    } else {
      if (contact.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact does not belong to your company' },
        })
      }
    }

    const { companyId, ...rest } = await request.validateUsing(updateContactValidator)

    if (companyId !== undefined) {
      if (currentUser.role !== 'admin') {
        return response.forbidden({ data: { message: 'Cannot change company' } })
      }
      contact.companyId = companyId
    }

    contact.merge(rest)
    await contact.save()

    return serialize(ContactTransformer.transform(contact))
  }

  /**
   * @destroy
   * @description Delete a contact
   * @tags Contacts
   */
  async destroy({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contact = await Contact.find(params.id)

    if (!contact) {
      return response.notFound({ data: { message: 'Contact not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contact.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact does not belong to your company' },
        })
      }
    } else {
      if (contact.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact does not belong to your company' },
        })
      }
    }

    await contact.delete()

    return response.ok({ data: { message: 'Contact deleted' } })
  }

  /**
   * @import
   * @description Bulk import contacts from an Excel file
   * @tags Contacts
   */
  async import({ auth, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()

    const companyId =
      currentUser.role === 'admin'
        ? Number(request.input('companyId', currentUser.companyId))
        : currentUser.companyId

    if (!companyId) {
      return response.badRequest({ data: { message: 'Company ID is required' } })
    }

    const file = request.file('file', {
      size: '10mb',
      extnames: ['xlsx', 'xls'],
    })

    if (!file) {
      return response.badRequest({ data: { message: 'Excel file is required' } })
    }

    if (file.hasErrors) {
      return response.badRequest({ data: { message: file.errors[0].message } })
    }

    const workbook = XLSX.default.readFile(file.tmpPath!)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const rows = XLSX.utils.sheet_to_json<Record<string, string | number | undefined>>(sheet)

    if (!rows.length) {
      return response.badRequest({ data: { message: 'Excel file is empty' } })
    }

    const headerMap: Record<string, string> = {}
    for (const key of Object.keys(rows[0])) {
      const normalized = key.trim().toLowerCase().replace(/\s+/g, '_')
      const mapped = columnMap[normalized] ?? normalized
      headerMap[key] = mapped
    }

    const created: Record<string, string | number>[] = []
    const errors: { row: number; message: string }[] = []

    for (const [index, raw] of rows.entries()) {
      const rowNumber = index + 2
      const mapped: Record<string, string | number | null> = {
        companyId,
        status: 'active',
      }

      for (const [originalKey, value] of Object.entries(raw)) {
        const targetKey = headerMap[originalKey]
        if (targetKey && value !== undefined && value !== '') {
          mapped[targetKey] = typeof value === 'string' ? value.trim() : value
        }
      }

      if (!mapped.firstName || !mapped.lastName) {
        errors.push({ row: rowNumber, message: 'firstName and lastName are required' })
        continue
      }

      try {
        const contact = await Contact.create(mapped as any)
        created.push({
          id: contact.id,
          firstName: contact.firstName,
          lastName: contact.lastName,
        })
      } catch (err) {
        errors.push({ row: rowNumber, message: (err as Error).message })
      }
    }

    return response.ok({
      data: {
        total: rows.length,
        created: created.length,
        failed: errors.length,
        contacts: created,
        errors,
      },
    })
  }
}

const columnMap: Record<string, string> = {
  first_name: 'firstName',
  firstname: 'firstName',
  last_name: 'lastName',
  lastname: 'lastName',
  job_title: 'jobTitle',
  jobtitle: 'jobTitle',
  company_name: 'companyName',
  companyname: 'companyName',
}
