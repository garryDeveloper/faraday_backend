import vine from '@vinejs/vine'

export const createTeamValidator = vine.create({
  name: vine.string().trim().maxLength(255),
  description: vine.string().trim().nullable().optional(),
  companyId: vine.number().withoutDecimals(),
  leaderId: vine.number().withoutDecimals().nullable().optional(),
})

export const updateTeamValidator = vine.create({
  name: vine.string().trim().maxLength(255).optional(),
  description: vine.string().trim().nullable().optional(),
  leaderId: vine.number().withoutDecimals().nullable().optional(),
})
