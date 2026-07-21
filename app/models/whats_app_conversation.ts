import { WhatsAppConversationSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import CampaignContact from './campaign_contact.js'
import WhatsAppMessage from './whats_app_message.js'

export default class WhatsAppConversation extends WhatsAppConversationSchema {
  @belongsTo(() => CampaignContact)
  declare campaignContact: BelongsTo<typeof CampaignContact>

  @hasMany(() => WhatsAppMessage, { foreignKey: 'conversationId' })
  declare messages: HasMany<typeof WhatsAppMessage>
}
