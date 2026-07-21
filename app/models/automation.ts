import { AutomationSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import AutomationTrigger from './automation_trigger.js'
import AutomationAction from './automation_action.js'

export default class Automation extends AutomationSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @hasMany(() => AutomationTrigger)
  declare triggers: HasMany<typeof AutomationTrigger>

  @hasMany(() => AutomationAction)
  declare actions: HasMany<typeof AutomationAction>
}
