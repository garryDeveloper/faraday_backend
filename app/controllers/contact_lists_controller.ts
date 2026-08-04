import ContactList from '#models/contact_list'
import Contact from '#models/contact'
import ContactListTransformer from '#transformers/contact_list_transformer'
import { createContactListValidator, updateContactListValidator } from '#validators/contact_list'
import type { HttpContext } from '@adonisjs/core/http'

export default class ContactListsController {
  /**
   * @index
   * @description List all contact lists (scoped by role)
   * @tags ContactLists
   */
  async index({ auth, request, serialize }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const filterCompanyId = request.input('companyId')

    const query = ContactList.query().preload('company').preload('contacts')

    if (
      (currentUser.role === 'seller' || currentUser.role === 'supervisor') &&
      currentUser.companyId
    ) {
      query.where('companyId', currentUser.companyId)
    } else if (filterCompanyId) {
      query.where('companyId', filterCompanyId)
    }

    const paginated = await query.paginate(page, limit)

    return serialize(ContactListTransformer.paginate(paginated.all(), paginated.getMeta()))
  }

  /**
   * @store
   * @description Create a new contact list
   * @tags ContactLists
   */
  async store({ auth, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { companyId, ...data } = await request.validateUsing(createContactListValidator)

    if (currentUser.role === 'seller' || currentUser.role === 'supervisor') {
      if (companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Can only create contact lists in your own company' },
        })
      }
    }

    const contactList = await ContactList.create({
      ...data,
      companyId,
      createdBy: currentUser.id,
    })
    await contactList.load('company')

    return serialize(ContactListTransformer.transform(contactList))
  }

  /**
   * @show
   * @description Get a contact list by ID
   * @tags ContactLists
   */
  async show({ auth, params, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contactList = await ContactList.query().preload('company').preload('contacts').where('id', params.id).first()

    if (!contactList) {
      return response.notFound({ data: { message: 'Contact list not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    } else {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    }

    return serialize(ContactListTransformer.transform(contactList))
  }

  /**
   * @update
   * @description Update a contact list
   * @tags ContactLists
   */
  async update({ auth, params, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contactList = await ContactList.query().preload('company').where('id', params.id).first()

    if (!contactList) {
      return response.notFound({ data: { message: 'Contact list not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    } else {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    }

    const data = await request.validateUsing(updateContactListValidator)

    contactList.merge(data)
    await contactList.save()

    return serialize(ContactListTransformer.transform(contactList))
  }

  /**
   * @destroy
   * @description Delete a contact list
   * @tags ContactLists
   */
  async destroy({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contactList = await ContactList.find(params.id)

    if (!contactList) {
      return response.notFound({ data: { message: 'Contact list not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    } else {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    }

    await contactList.delete()

    return response.ok({ data: { message: 'Contact list deleted' } })
  }

  /**
   * @attachContacts
   * @description Attach contacts to a contact list
   * @tags ContactLists
   */
  async attachContacts({ auth, params, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contactList = await ContactList.query().preload('company').where('id', params.id).first()

    if (!contactList) {
      return response.notFound({ data: { message: 'Contact list not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    } else {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    }

    const { contactIds } = request.only(['contactIds']) as { contactIds: number[] }

    if (!Array.isArray(contactIds) || contactIds.length === 0) {
      return response.badRequest({ data: { message: 'contactIds must be a non-empty array' } })
    }

    const contacts = await Contact.query().whereIn('id', contactIds)

    if (contacts.length !== contactIds.length) {
      return response.badRequest({
        data: { message: 'One or more contacts were not found' },
      })
    }

    for (const contact of contacts) {
      if (contact.companyId !== contactList.companyId) {
        return response.badRequest({
          data: {
            message: `Contact "${contact.firstName} ${contact.lastName}" does not belong to the same company as the list`,
          },
        })
      }
    }

    await contactList.related('contacts').attach(contactIds)

    return response.ok({ data: { message: 'Contacts attached successfully' } })
  }

  /**
   * @detachContact
   * @description Detach a contact from a contact list
   * @tags ContactLists
   */
  async detachContact({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const contactList = await ContactList.query().preload('company').where('id', params.id).first()

    if (!contactList) {
      return response.notFound({ data: { message: 'Contact list not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    } else {
      if (contactList.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Contact list does not belong to your company' },
        })
      }
    }

    await contactList.related('contacts').detach([params.contactId])

    return response.ok({ data: { message: 'Contact detached successfully' } })
  }
}
