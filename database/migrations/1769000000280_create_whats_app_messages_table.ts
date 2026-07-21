import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'whats_app_messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('conversation_id')
        .unsigned()
        .references('id')
        .inTable('whats_app_conversations')
        .onDelete('CASCADE')
        .notNullable()
      table.string('direction').notNullable()
      table.string('message_type').nullable()
      table.string('template_name').nullable()
      table.text('text').nullable()
      table.string('media_url').nullable()
      table.string('status').notNullable()
      table.string('meta_message_id').nullable()
      table.timestamp('sent_at').nullable()
      table.timestamp('delivered_at').nullable()
      table.timestamp('read_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
