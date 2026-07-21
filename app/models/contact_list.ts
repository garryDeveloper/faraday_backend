import { ContactListSchema } from '#database/schema'
import { belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import User from './user.js'
import Contact from './contact.js'
import ContactListItem from './contact_list_item.js'
import CampaignList from './campaign_list.js'

export default class ContactList extends ContactListSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @belongsTo(() => User, { foreignKey: 'createdBy' })
  declare creator: BelongsTo<typeof User>

  @hasMany(() => ContactListItem)
  declare items: HasMany<typeof ContactListItem>

  @manyToMany(() => Contact, {
    pivotTable: 'contact_list_items',
    pivotForeignKey: 'list_id',
    pivotRelatedForeignKey: 'contact_id',
  })
  declare contacts: ManyToMany<typeof Contact>

  @hasMany(() => CampaignList)
  declare campaignLists: HasMany<typeof CampaignList>
}
