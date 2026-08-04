import vine from '@vinejs/vine'
import { CAMPAIGN_CONTACT_STATUSES } from '../utils/campaign_status_utils.ts'

const distributionAssignment = vine.object({
  sellerId: vine.number().withoutDecimals(),
  contactIds: vine.array(vine.number().withoutDecimals()),
})

const distributionEntry = vine.object({
  teamId: vine.number().withoutDecimals(),
  contactListId: vine.number().withoutDecimals(),
  distributionType: vine.string().trim().in(['manual', 'round_robin', 'balanced']),
  assignments: vine.array(distributionAssignment).optional(),
})

export const createCampaignValidator = vine.create({
  name: vine.string().trim().maxLength(255),
  description: vine.string().trim().nullable().optional(),
  type: vine.string().trim().maxLength(255).optional(),
  status: vine.string().trim().maxLength(50).optional(),
  startDate: vine.date().nullable().optional(),
  endDate: vine.date().nullable().optional(),
  script: vine.string().trim().nullable().optional(),
  companyId: vine.number().withoutDecimals(),
  listIds: vine.array(vine.number().withoutDecimals()).optional(),
  teamIds: vine.array(vine.number().withoutDecimals()).optional(),
  distributions: vine.array(distributionEntry).optional(),
})

export const updateCampaignValidator = vine.create({
  name: vine.string().trim().maxLength(255).optional(),
  description: vine.string().trim().nullable().optional(),
  type: vine.string().trim().maxLength(255).optional(),
  status: vine.string().trim().maxLength(50).optional(),
  startDate: vine.date().nullable().optional(),
  endDate: vine.date().nullable().optional(),
  script: vine.string().trim().nullable().optional(),
  listIds: vine.array(vine.number().withoutDecimals()).optional(),
  teamIds: vine.array(vine.number().withoutDecimals()).optional(),
  distributions: vine.array(distributionEntry).optional(),
})

export const updateCampaignContactStatusValidator = vine.create({
  status: vine.enum(CAMPAIGN_CONTACT_STATUSES),
})

export const createNoteValidator = vine.create({
  text: vine.string().trim().minLength(1).maxLength(5000),
})

export const updateNoteValidator = vine.create({
  text: vine.string().trim().minLength(1).maxLength(5000),
})
