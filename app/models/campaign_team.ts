import { CampaignTeamSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campaign from './campaign.js'
import Team from './team.js'

export default class CampaignTeam extends CampaignTeamSchema {
  @belongsTo(() => Campaign)
  declare campaign: BelongsTo<typeof Campaign>

  @belongsTo(() => Team)
  declare team: BelongsTo<typeof Team>
}
