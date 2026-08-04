import { CampaignDistributionSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campaign from './campaign.js'
import Team from './team.js'
import ContactList from './contact_list.js'

export default class CampaignDistribution extends CampaignDistributionSchema {
  @belongsTo(() => Campaign)
  declare campaign: BelongsTo<typeof Campaign>

  @belongsTo(() => Team)
  declare team: BelongsTo<typeof Team>

  @belongsTo(() => ContactList, { foreignKey: 'contactListId' })
  declare contactList: BelongsTo<typeof ContactList>
}
