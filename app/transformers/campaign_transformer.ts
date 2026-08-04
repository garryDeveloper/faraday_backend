import type Campaign from '#models/campaign'
import CompanyTransformer from '#transformers/company_transformer'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class CampaignTransformer extends BaseTransformer<Campaign> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'name',
        'description',
        'type',
        'status',
        'startDate',
        'endDate',
        'script',
        'createdAt',
      ]),
      company: this.resource.company ? CompanyTransformer.transform(this.resource.company) : null,
      createdBy: this.resource.creator
        ? { id: this.resource.creator.id, firstName: this.resource.creator.firstName, lastName: this.resource.creator.lastName }
        : null,
      lists: this.resource.lists
        ? this.resource.lists.map((list) => ({ id: list.id, name: list.name }))
        : [],
      teams: this.resource.teams
        ? this.resource.teams.map((team) => ({ id: team.id, name: team.name }))
        : [],
      distributions: this.resource.distributions
        ? this.resource.distributions.map((d) => ({
            id: d.id,
            distributionType: d.distributionType,
            team: d.team ? { id: d.team.id, name: d.team.name } : null,
            contactList: d.contactList ? { id: d.contactList.id, name: d.contactList.name } : null,
          }))
        : [],
    }
  }
}
