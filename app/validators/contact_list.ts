import vine from '@vinejs/vine'

export const createContactListValidator = vine.create({
  name: vine.string().trim().maxLength(255),
  description: vine.string().trim().nullable().optional(),
  companyId: vine.number().withoutDecimals(),
})

export const updateContactListValidator = vine.create({
  name: vine.string().trim().maxLength(255).optional(),
  description: vine.string().trim().nullable().optional(),
})
