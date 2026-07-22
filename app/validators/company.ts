import vine from '@vinejs/vine'

export const createCompanyValidator = vine.create({
  name: vine.string().trim().maxLength(255),
  email: vine.string().email().maxLength(254).nullable().optional(),
  phone: vine.string().trim().maxLength(50).nullable().optional(),
  taxId: vine.string().trim().maxLength(50).nullable().optional(),
  timezone: vine.string().trim().maxLength(50).optional(),
  status: vine.string().trim().maxLength(50).optional(),
})

export const updateCompanyValidator = vine.create({
  name: vine.string().trim().maxLength(255).optional(),
  email: vine.string().email().maxLength(254).nullable().optional(),
  phone: vine.string().trim().maxLength(50).nullable().optional(),
  taxId: vine.string().trim().maxLength(50).nullable().optional(),
  timezone: vine.string().trim().maxLength(50).optional(),
  status: vine.string().trim().maxLength(50).optional(),
})
