import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campaign_lists'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('campaign_id')
        .unsigned()
        .references('id')
        .inTable('campaigns')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('list_id')
        .unsigned()
        .references('id')
        .inTable('contact_lists')
        .onDelete('CASCADE')
        .notNullable()
      table.primary(['campaign_id', 'list_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
