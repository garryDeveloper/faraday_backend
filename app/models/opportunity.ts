import { OpportunitySchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Contact from './contact.js'
import Pipeline from './pipeline.js'
import PipelineStage from './pipeline_stage.js'
import User from './user.js'

export default class Opportunity extends OpportunitySchema {
  @belongsTo(() => Contact)
  declare contact: BelongsTo<typeof Contact>

  @belongsTo(() => Pipeline)
  declare pipeline: BelongsTo<typeof Pipeline>

  @belongsTo(() => PipelineStage, { foreignKey: 'stageId' })
  declare stage: BelongsTo<typeof PipelineStage>

  @belongsTo(() => User, { foreignKey: 'assignedUserId' })
  declare assignedUser: BelongsTo<typeof User>
}
