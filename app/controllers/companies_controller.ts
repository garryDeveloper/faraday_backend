import Company from '#models/company'
import CompanyTransformer from '#transformers/company_transformer'
import { createCompanyValidator, updateCompanyValidator } from '#validators/company'
import type { HttpContext } from '@adonisjs/core/http'

export default class CompaniesController {
  /**
   * @index
   * @description List all companies
   * @tags Companies
   */
  async index({ request, serialize }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const companies = await Company.query().paginate(page, limit)

    return serialize(companies)
  }

  /**
   * @store
   * @description Create a new company
   * @tags Companies
   */
  async store({ request, serialize }: HttpContext) {
    const data = await request.validateUsing(createCompanyValidator)

    const company = await Company.create(data)

    return serialize(CompanyTransformer.transform(company))
  }

  /**
   * @show
   * @description Get a company by ID
   * @tags Companies
   */
  async show({ params, serialize, response }: HttpContext) {
    const company = await Company.find(params.id)

    if (!company) {
      return response.notFound({ data: { message: 'Company not found' } })
    }

    return serialize(CompanyTransformer.transform(company))
  }

  /**
   * @update
   * @description Update a company
   * @tags Companies
   */
  async update({ params, request, serialize, response }: HttpContext) {
    const company = await Company.find(params.id)

    if (!company) {
      return response.notFound({ data: { message: 'Company not found' } })
    }

    const data = await request.validateUsing(updateCompanyValidator)

    company.merge(data)
    await company.save()

    return serialize(CompanyTransformer.transform(company))
  }

  /**
   * @destroy
   * @description Delete a company
   * @tags Companies
   */
  async destroy({ params, response }: HttpContext) {
    const company = await Company.find(params.id)

    if (!company) {
      return response.notFound({ data: { message: 'Company not found' } })
    }

    await company.delete()

    return response.ok({ data: { message: 'Company deleted' } })
  }
}
