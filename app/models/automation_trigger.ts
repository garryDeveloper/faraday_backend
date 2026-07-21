import { AutomationTriggerSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Automation from './automation.js'

export default class AutomationTrigger extends AutomationTriggerSchema {
  @belongsTo(() => Automation)
  declare automation: BelongsTo<typeof Automation>
}
