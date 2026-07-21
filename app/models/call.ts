import { CallSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Activity from './activity.js'

export default class Call extends CallSchema {
  @belongsTo(() => Activity)
  declare activity: BelongsTo<typeof Activity>
}
