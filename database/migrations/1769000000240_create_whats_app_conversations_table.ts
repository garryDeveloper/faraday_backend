import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'whats_app_conversations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('campaign_contact_id')
        .unsigned()
        .references('id')
        .inTable('campaign_contacts')
        .onDelete('CASCADE')
        .notNullable()
      table.string('phone').notNullable()
      table.string('status').notNullable()
      table.timestamp('started_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
