import type Team from '#models/team'
import CompanyTransformer from '#transformers/company_transformer'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class TeamTransformer extends BaseTransformer<Team> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'description']),
      company: this.resource.company ? CompanyTransformer.transform(this.resource.company) : null,
      leader: this.resource.leader
        ? { id: this.resource.leader.id, firstName: this.resource.leader.firstName, lastName: this.resource.leader.lastName }
        : null,
      users: this.resource.users
        ? this.resource.users.map((user) => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          }))
        : [],
    }
  }
}
