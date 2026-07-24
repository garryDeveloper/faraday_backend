import type User from '#models/user'
import CompanyTransformer from '#transformers/company_transformer'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class UserTransformer extends BaseTransformer<User> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'firstName',
        'lastName',
        'email',
        'role',
        'status',
        'createdAt',
        'initials',
      ]),
      company: this.resource.company
        ? CompanyTransformer.transform(this.resource.company)
        : null,
    }
  }
}
