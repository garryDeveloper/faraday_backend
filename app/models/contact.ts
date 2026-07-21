import { ContactSchema } from '#database/schema'
import { belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import Tag from './tag.js'
import CustomValue from './custom_value.js'
import Opportunity from './opportunity.js'
import CampaignContact from './campaign_contact.js'
import ContactList from './contact_list.js'

export default class Contact extends ContactSchema {
  @belongsTo(() => Company, { foreignKey: 'companyId' })
  declare company: BelongsTo<typeof Company>

  @hasMany(() => CustomValue, { foreignKey: 'contactId' })
  declare customValues: HasMany<typeof CustomValue>

  @hasMany(() => Opportunity)
  declare opportunities: HasMany<typeof Opportunity>

  @hasMany(() => CampaignContact)
  declare campaignContacts: HasMany<typeof CampaignContact>

  @manyToMany(() => Tag, {
    pivotTable: 'contact_tag_relations',
    pivotForeignKey: 'contact_id',
    pivotRelatedForeignKey: 'tag_id',
  })
  declare tags: ManyToMany<typeof Tag>

  @manyToMany(() => ContactList, {
    pivotTable: 'contact_list_items',
    pivotForeignKey: 'contact_id',
    pivotRelatedForeignKey: 'list_id',
  })
  declare lists: ManyToMany<typeof ContactList>
}
