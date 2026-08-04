import type ContactList from '#models/contact_list'
import CompanyTransformer from '#transformers/company_transformer'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class ContactListTransformer extends BaseTransformer<ContactList> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'description', 'createdAt']),
      company: this.resource.company ? CompanyTransformer.transform(this.resource.company) : null,
      contacts: this.resource.contacts ? this.resource.contacts.map((contact) => contact.toJSON()) : [],
    }
  }
}
