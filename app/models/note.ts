import { NoteSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import CampaignContact from './campaign_contact.js'
import User from './user.js'

export default class Note extends NoteSchema {
  @belongsTo(() => CampaignContact)
  declare campaignContact: BelongsTo<typeof CampaignContact>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
