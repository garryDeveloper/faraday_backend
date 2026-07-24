import vine from '@vinejs/vine'

export const createContactValidator = vine.create({
  firstName: vine.string().trim().maxLength(255),
  lastName: vine.string().trim().maxLength(255),
  email: vine.string().email().maxLength(254).nullable().optional(),
  phone: vine.string().trim().maxLength(50).nullable().optional(),
  mobile: vine.string().trim().maxLength(50).nullable().optional(),
  jobTitle: vine.string().trim().maxLength(255).nullable().optional(),
  companyId: vine.number().withoutDecimals(),
  companyName: vine.string().trim().maxLength(255).nullable().optional(),
  address: vine.string().trim().maxLength(255).nullable().optional(),
  city: vine.string().trim().maxLength(255).nullable().optional(),
  province: vine.string().trim().maxLength(255).nullable().optional(),
  country: vine.string().trim().maxLength(255).nullable().optional(),
  website: vine.string().trim().maxLength(255).nullable().optional(),
  notes: vine.string().trim().nullable().optional(),
  status: vine.string().trim().maxLength(50).optional(),
})

export const updateContactValidator = vine.create({
  firstName: vine.string().trim().maxLength(255).optional(),
  lastName: vine.string().trim().maxLength(255).optional(),
  email: vine.string().email().maxLength(254).nullable().optional(),
  phone: vine.string().trim().maxLength(50).nullable().optional(),
  mobile: vine.string().trim().maxLength(50).nullable().optional(),
  jobTitle: vine.string().trim().maxLength(255).nullable().optional(),
  companyId: vine.number().withoutDecimals().optional(),
  companyName: vine.string().trim().maxLength(255).nullable().optional(),
  address: vine.string().trim().maxLength(255).nullable().optional(),
  city: vine.string().trim().maxLength(255).nullable().optional(),
  province: vine.string().trim().maxLength(255).nullable().optional(),
  country: vine.string().trim().maxLength(255).nullable().optional(),
  website: vine.string().trim().maxLength(255).nullable().optional(),
  notes: vine.string().trim().nullable().optional(),
  status: vine.string().trim().maxLength(50).optional(),
})
