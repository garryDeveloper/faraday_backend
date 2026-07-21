import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'automation_actions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('automation_id')
        .unsigned()
        .references('id')
        .inTable('automations')
        .onDelete('CASCADE')
        .notNullable()
      table.string('type').notNullable()
      table.text('configuration').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
