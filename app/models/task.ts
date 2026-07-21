import { TaskSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import CampaignContact from './campaign_contact.js'
import User from './user.js'

export default class Task extends TaskSchema {
  @belongsTo(() => CampaignContact)
  declare campaignContact: BelongsTo<typeof CampaignContact>

  @belongsTo(() => User, { foreignKey: 'assignedUserId' })
  declare assignedUser: BelongsTo<typeof User>
}
