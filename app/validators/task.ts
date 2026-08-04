import vine from '@vinejs/vine'

export const createTaskValidator = vine.create({
  campaignContactId: vine.number().withoutDecimals(),
  title: vine.string().trim().minLength(1).maxLength(255),
  description: vine.string().trim().nullable().optional(),
  dueDate: vine.date().nullable().optional(),
  status: vine.enum(['pending', 'in_progress', 'completed', 'cancelled']).optional(),
  priority: vine.enum(['low', 'medium', 'high']).optional(),
  assignedUserId: vine.number().withoutDecimals().nullable().optional(),
})

export const updateTaskValidator = vine.create({
  campaignContactId: vine.number().withoutDecimals().optional(),
  title: vine.string().trim().minLength(1).maxLength(255).optional(),
  description: vine.string().trim().nullable().optional(),
  dueDate: vine.date().nullable().optional(),
  status: vine.enum(['pending', 'in_progress', 'completed', 'cancelled']).optional(),
  priority: vine.enum(['low', 'medium', 'high']).optional(),
  assignedUserId: vine.number().withoutDecimals().nullable().optional(),
})
