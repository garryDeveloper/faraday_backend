import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pipeline_stages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('pipeline_id')
        .unsigned()
        .references('id')
        .inTable('pipelines')
        .onDelete('CASCADE')
        .notNullable()
      table.string('name').notNullable()
      table.integer('position').notNullable()
      table.string('color').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
