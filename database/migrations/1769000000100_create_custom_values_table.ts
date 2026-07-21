import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'custom_values'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('contact_id')
        .unsigned()
        .references('id')
        .inTable('contacts')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('field_id')
        .unsigned()
        .references('id')
        .inTable('custom_fields')
        .onDelete('CASCADE')
        .notNullable()
      table.text('value').nullable()
      table.primary(['contact_id', 'field_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
