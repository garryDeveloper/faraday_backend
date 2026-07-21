import { CustomFieldSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import CustomValue from './custom_value.js'

export default class CustomField extends CustomFieldSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @hasMany(() => CustomValue, { foreignKey: 'fieldId' })
  declare values: HasMany<typeof CustomValue>
}
