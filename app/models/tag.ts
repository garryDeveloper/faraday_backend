import { TagSchema } from '#database/schema'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import Contact from './contact.js'

export default class Tag extends TagSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @manyToMany(() => Contact, {
    pivotTable: 'contact_tag_relations',
    pivotForeignKey: 'tag_id',
    pivotRelatedForeignKey: 'contact_id',
  })
  declare contacts: ManyToMany<typeof Contact>
}
