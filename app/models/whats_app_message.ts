import { WhatsAppMessageSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import WhatsAppConversation from './whats_app_conversation.js'

export default class WhatsAppMessage extends WhatsAppMessageSchema {
  @belongsTo(() => WhatsAppConversation, { foreignKey: 'conversationId' })
  declare conversation: BelongsTo<typeof WhatsAppConversation>
}
