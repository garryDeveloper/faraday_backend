import { CompanySchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Contact from './contact.js'
import ContactList from './contact_list.js'
import Campaign from './campaign.js'
import Pipeline from './pipeline.js'
import AuditLog from './audit_log.js'
import Automation from './automation.js'
import Tag from './tag.js'
import CustomField from './custom_field.js'

export default class Company extends CompanySchema {
  @hasMany(() => User)
  declare users: HasMany<typeof User>

  @hasMany(() => Contact)
  declare contacts: HasMany<typeof Contact>

  @hasMany(() => Tag)
  declare tags: HasMany<typeof Tag>

  @hasMany(() => CustomField)
  declare customFields: HasMany<typeof CustomField>

  @hasMany(() => ContactList)
  declare lists: HasMany<typeof ContactList>

  @hasMany(() => Campaign)
  declare campaigns: HasMany<typeof Campaign>

  @hasMany(() => Pipeline)
  declare pipelines: HasMany<typeof Pipeline>

  @hasMany(() => Automation)
  declare automations: HasMany<typeof Automation>

  @hasMany(() => AuditLog)
  declare auditLogs: HasMany<typeof AuditLog>
}
