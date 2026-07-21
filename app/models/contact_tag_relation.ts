import { ContactTagRelationSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'
import Tag from './tag.js'

export default class ContactTagRelation extends ContactTagRelationSchema {
  @belongsTo(() => Contact)
  declare contact: BelongsTo<typeof Contact>

  @belongsTo(() => Tag)
  declare tag: BelongsTo<typeof Tag>
}
