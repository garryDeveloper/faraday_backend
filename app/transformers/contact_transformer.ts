import type Contact from '#models/contact'
import CompanyTransformer from '#transformers/company_transformer'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class ContactTransformer extends BaseTransformer<Contact> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'mobile',
        'jobTitle',
        'companyName',
        'address',
        'city',
        'province',
        'country',
        'website',
        'notes',
        'status',
        'createdAt',
        'updatedAt',
      ]),
      company: this.resource.company ? CompanyTransformer.transform(this.resource.company) : null,
    }
  }
}
