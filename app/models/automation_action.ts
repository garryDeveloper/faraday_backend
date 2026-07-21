import { AutomationActionSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Automation from './automation.js'

export default class AutomationAction extends AutomationActionSchema {
  @belongsTo(() => Automation)
  declare automation: BelongsTo<typeof Automation>
}
