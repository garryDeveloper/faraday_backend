import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campaign_teams'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
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
      table.primary(['campaign_id', 'team_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
