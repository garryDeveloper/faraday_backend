import { EmailMessageSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Activity from './activity.js'

export default class EmailMessage extends EmailMessageSchema {
  @belongsTo(() => Activity)
  declare activity: BelongsTo<typeof Activity>
}
