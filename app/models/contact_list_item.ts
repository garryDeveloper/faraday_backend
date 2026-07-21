import { ContactListItemSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import ContactList from './contact_list.js'
import Contact from './contact.js'

export default class ContactListItem extends ContactListItemSchema {
  @belongsTo(() => ContactList, { foreignKey: 'listId' })
  declare list: BelongsTo<typeof ContactList>

  @belongsTo(() => Contact)
  declare contact: BelongsTo<typeof Contact>
}
