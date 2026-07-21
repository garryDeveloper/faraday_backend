import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('company_id')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onDelete('CASCADE')
        .notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('company_name').nullable()
      table.string('job_title').nullable()
      table.string('phone').nullable()
      table.string('mobile').nullable()
      table.string('email').nullable()
      table.string('website').nullable()
      table.string('country').nullable()
      table.string('province').nullable()
      table.string('city').nullable()
      table.text('address').nullable()
      table.text('notes').nullable()
      table.string('status').notNullable().defaultTo('active')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
