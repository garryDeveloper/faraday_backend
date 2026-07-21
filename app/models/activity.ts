import { ActivitySchema } from '#database/schema'
import { belongsTo, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import CampaignContact from './campaign_contact.js'
import User from './user.js'
import Call from './call.js'
import EmailMessage from './email_message.js'
import Attachment from './attachment.js'

export default class Activity extends ActivitySchema {
  @belongsTo(() => CampaignContact)
  declare campaignContact: BelongsTo<typeof CampaignContact>

  @belongsTo(() => User, { foreignKey: 'performedBy' })
  declare performer: BelongsTo<typeof User>

  @hasOne(() => Call)
  declare call: HasOne<typeof Call>

  @hasOne(() => EmailMessage)
  declare email: HasOne<typeof EmailMessage>

  @hasMany(() => Attachment)
  declare attachments: HasMany<typeof Attachment>
}
