import { CampaignSchema } from '#database/schema'
import { belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import User from './user.js'
import Team from './team.js'
import ContactList from './contact_list.js'
import CampaignList from './campaign_list.js'
import CampaignTeam from './campaign_team.js'
import CampaignAssignmentRule from './campaign_assignment_rule.js'
import CampaignContact from './campaign_contact.js'

export default class Campaign extends CampaignSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @belongsTo(() => User, { foreignKey: 'createdBy' })
  declare creator: BelongsTo<typeof User>

  @hasMany(() => CampaignList)
  declare campaignLists: HasMany<typeof CampaignList>

  @hasMany(() => CampaignTeam)
  declare campaignTeams: HasMany<typeof CampaignTeam>

  @hasMany(() => CampaignAssignmentRule)
  declare assignmentRules: HasMany<typeof CampaignAssignmentRule>

  @hasMany(() => CampaignContact)
  declare campaignContacts: HasMany<typeof CampaignContact>

  @manyToMany(() => ContactList, {
    pivotTable: 'campaign_lists',
    pivotForeignKey: 'campaign_id',
    pivotRelatedForeignKey: 'list_id',
  })
  declare lists: ManyToMany<typeof ContactList>

  @manyToMany(() => Team, {
    pivotTable: 'campaign_teams',
    pivotForeignKey: 'campaign_id',
    pivotRelatedForeignKey: 'team_id',
  })
  declare teams: ManyToMany<typeof Team>
}
