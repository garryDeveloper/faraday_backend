import { PipelineStageSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Pipeline from './pipeline.js'

export default class PipelineStage extends PipelineStageSchema {
  @belongsTo(() => Pipeline)
  declare pipeline: BelongsTo<typeof Pipeline>
}
