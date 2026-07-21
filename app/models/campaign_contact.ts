import { CampaignContactSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Campaign from './campaign.js'
import Contact from './contact.js'
import User from './user.js'
import Activity from './activity.js'
import WhatsAppConversation from './whats_app_conversation.js'
import Task from './task.js'
import Note from './note.js'

export default class CampaignContact extends CampaignContactSchema {
  @belongsTo(() => Campaign)
  declare campaign: BelongsTo<typeof Campaign>

  @belongsTo(() => Contact)
  declare contact: BelongsTo<typeof Contact>

  @belongsTo(() => User, { foreignKey: 'assignedUserId' })
  declare assignedUser: BelongsTo<typeof User>

  @hasMany(() => Activity)
  declare activities: HasMany<typeof Activity>

  @hasMany(() => WhatsAppConversation)
  declare whatsappConversations: HasMany<typeof WhatsAppConversation>

  @hasMany(() => Task)
  declare tasks: HasMany<typeof Task>

  @hasMany(() => Note)
  declare notes: HasMany<typeof Note>
}
