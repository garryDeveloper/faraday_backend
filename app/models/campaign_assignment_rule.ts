import { CampaignAssignmentRuleSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campaign from './campaign.js'

export default class CampaignAssignmentRule extends CampaignAssignmentRuleSchema {
  @belongsTo(() => Campaign)
  declare campaign: BelongsTo<typeof Campaign>
}
