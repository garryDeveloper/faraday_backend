import { PipelineSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Company from './company.js'
import PipelineStage from './pipeline_stage.js'

export default class Pipeline extends PipelineSchema {
  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @hasMany(() => PipelineStage)
  declare stages: HasMany<typeof PipelineStage>
}
