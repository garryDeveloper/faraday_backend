import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'attachments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('activity_id')
        .unsigned()
        .references('id')
        .inTable('activities')
        .onDelete('CASCADE')
        .notNullable()
      table.string('name').notNullable()
      table.string('url').notNullable()
      table.string('mime_type').nullable()
      table.integer('size').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
