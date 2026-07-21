import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'calls'

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
      table.string('direction').notNullable()
      table.integer('duration').nullable()
      table.string('recording_url').nullable()
      table.string('result').notNullable()
      table.text('transcript').nullable()
      table.text('summary').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
