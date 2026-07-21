import { CampaignListSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campaign from './campaign.js'
import ContactList from './contact_list.js'

export default class CampaignList extends CampaignListSchema {
  @belongsTo(() => Campaign)
  declare campaign: BelongsTo<typeof Campaign>

  @belongsTo(() => ContactList, { foreignKey: 'listId' })
  declare list: BelongsTo<typeof ContactList>
}
