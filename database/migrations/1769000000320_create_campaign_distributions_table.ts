import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campaign_distributions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('campaign_id')
        .unsigned()
        .references('id')
        .inTable('campaigns')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('team_id')
        .unsigned()
        .references('id')
        .inTable('teams')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('contact_list_id')
        .unsigned()
        .references('id')
        .inTable('contact_lists')
        .onDelete('CASCADE')
        .notNullable()
      table.string('distribution_type').notNullable()
      table.unique(['campaign_id', 'team_id', 'contact_list_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
