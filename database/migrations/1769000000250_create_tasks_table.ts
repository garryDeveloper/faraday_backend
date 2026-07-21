import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

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
      table
        .integer('assigned_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .nullable()
      table.string('title').notNullable()
      table.text('description').nullable()
      table.timestamp('due_date').nullable()
      table.string('status').notNullable().defaultTo('pending')
      table.string('priority').notNullable().defaultTo('medium')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
