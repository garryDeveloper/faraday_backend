import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('tax_id').nullable()
      table.string('email').nullable()
      table.string('phone').nullable()
      table.string('timezone').notNullable().defaultTo('UTC')
      table.string('status').notNullable().defaultTo('active')
      table.timestamp('created_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
