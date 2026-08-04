import vine from '@vinejs/vine'

export const sendMessageValidator = vine.create({
  conversationId: vine.number().withoutDecimals(),
  to: vine.string().trim().maxLength(20),
  type: vine.enum(['text', 'template']),
  text: vine.string().trim().maxLength(4096).optional(),
  templateName: vine.string().trim().maxLength(255).optional(),
})

export const sendTemplateValidator = vine.create({
  conversationId: vine.number().withoutDecimals(),
  to: vine.string().trim().maxLength(20),
  templateName: vine.string().trim().maxLength(255),
  language: vine.string().trim().maxLength(10).optional(),
  components: vine.array(vine.object({
    type: vine.string().trim().maxLength(50),
    parameters: vine.array(vine.object({
      type: vine.string().trim().maxLength(50),
      text: vine.string().trim().maxLength(4096).optional(),
    })),
  })).optional(),
})
