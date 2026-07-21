import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contact_list_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('list_id')
        .unsigned()
        .references('id')
        .inTable('contact_lists')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('contact_id')
        .unsigned()
        .references('id')
        .inTable('contacts')
        .onDelete('CASCADE')
        .notNullable()
      table.primary(['list_id', 'contact_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
