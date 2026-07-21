import { TeamSchema } from '#database/schema'
import { belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import User from './user.js'
import TeamMember from './team_member.js'

export default class Team extends TeamSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @belongsTo(() => User, { foreignKey: 'leaderId' })
  declare leader: BelongsTo<typeof User>

  @hasMany(() => TeamMember)
  declare members: HasMany<typeof TeamMember>

  @manyToMany(() => User, {
    pivotTable: 'team_members',
    pivotForeignKey: 'team_id',
    pivotRelatedForeignKey: 'user_id',
  })
  declare users: ManyToMany<typeof User>
}
