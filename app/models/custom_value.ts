import { CustomValueSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'
import CustomField from './custom_field.js'

export default class CustomValue extends CustomValueSchema {
  @belongsTo(() => Contact)
  declare contact: BelongsTo<typeof Contact>

  @belongsTo(() => CustomField, { foreignKey: 'fieldId' })
  declare field: BelongsTo<typeof CustomField>
}
