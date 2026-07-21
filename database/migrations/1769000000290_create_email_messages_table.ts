import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'email_messages'

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
      table.string('subject').notNullable()
      table.text('body').nullable()
      table.string('status').notNullable()
      table.boolean('opened').notNullable().defaultTo(false)
      table.boolean('clicked').notNullable().defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
