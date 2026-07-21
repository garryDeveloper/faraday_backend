import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'opportunities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('contact_id')
        .unsigned()
        .references('id')
        .inTable('contacts')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('pipeline_id')
        .unsigned()
        .references('id')
        .inTable('pipelines')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('stage_id')
        .unsigned()
        .references('id')
        .inTable('pipeline_stages')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('assigned_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .nullable()
      table.string('title').notNullable()
      table.decimal('amount', 15, 2).nullable()
      table.integer('probability').nullable()
      table.timestamp('expected_close_date').nullable()
      table.string('status').notNullable().defaultTo('open')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
