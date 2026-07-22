import type Company from '#models/company'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class CompanyTransformer extends BaseTransformer<Company> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'name',
      'email',
      'phone',
      'taxId',
      'timezone',
      'status',
      'createdAt',
    ])
  }
}
