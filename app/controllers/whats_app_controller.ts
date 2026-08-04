import { DateTime } from 'luxon'
import logger from '@adonisjs/core/services/logger'
import whatsapp from '#config/whatsapp'
import WhatsAppMessage from '#models/whats_app_message'
import WhatsAppConversation from '#models/whats_app_conversation'
import CampaignContact from '#models/campaign_contact'
import Contact from '#models/contact'
import type { HttpContext } from '@adonisjs/core/http'
import { mapMetaTemplate } from '../utils/meta_utils.ts'
import { sendMessageValidator, sendTemplateValidator } from '../validators/whatsapp.ts'

interface WebhookMessage {
  from: string
  id: string
  timestamp: string
  type: string
  text?: { body?: string }
  image?: { id?: string; mime_type?: string; link?: string }
  video?: { id?: string; mime_type?: string; link?: string }
  audio?: { id?: string; mime_type?: string; link?: string }
  document?: { id?: string; mime_type?: string; link?: string; filename?: string }
  sticker?: { id?: string; link?: string }
}

interface WebhookStatus {
  id: string
  status: string
  timestamp: string
  recipient_id?: string
}

interface WebhookValue {
  messages?: WebhookMessage[]
  statuses?: WebhookStatus[]
}

export default class WhatsAppController {
  /**
   * @templates
   * @description Fetch WhatsApp message templates from Meta Cloud API
   * @tags WhatsApp
   */
  async templates({ response }: HttpContext) {
    const url = `${whatsapp.baseUrl}/${whatsapp.apiVersion}/${whatsapp.businessAccountId}/message_templates`

    const apiResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${whatsapp.accessToken}`,
      },
    })

    if (!apiResponse.ok) {
      const error: unknown = await apiResponse.json()
      return response.status(apiResponse.status).json({
        data: { message: 'Failed to fetch WhatsApp templates', error },
      })
    }

    const body = (await apiResponse.json()) as { data?: unknown[] }
    const templates = (body.data ?? []).map(mapMetaTemplate)

    return { data: templates }
  }

  /**
   * @send
   * @description Send a WhatsApp message via Meta Cloud API and persist it locally
   * @tags WhatsApp
   */
  async send({ request, response }: HttpContext) {
    const payload = await request.validateUsing(sendMessageValidator)

    const body: Record<string, unknown> = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: payload.to,
      type: payload.type,
    }

    if (payload.type === 'text') {
      if (!payload.text) {
        return response.status(422).json({
          data: { message: 'Text is required when type is "text"' },
        })
      }
      body.text = { body: payload.text }
    } else if (payload.type === 'template') {
      if (!payload.templateName) {
        return response.status(422).json({
          data: { message: 'templateName is required when type is "template"' },
        })
      }
      body.template = {
        name: payload.templateName,
        language: { code: 'en' },
      }
    }

    const url = `${whatsapp.baseUrl}/${whatsapp.apiVersion}/${whatsapp.phoneNumberId}/messages`

    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${whatsapp.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const result = (await apiResponse.json()) as {
      messages?: { id: string }[]
      error?: unknown
    }

    if (!apiResponse.ok || result.error) {
      return response.status(apiResponse.status).json({
        data: { message: 'Failed to send WhatsApp message', error: result.error },
      })
    }

    const metaMessageId = result.messages?.[0]?.id ?? null

    const message = await WhatsAppMessage.create({
      conversationId: payload.conversationId,
      direction: 'sent',
      messageType: payload.type,
      templateName: payload.type === 'template' ? payload.templateName : null,
      text: payload.type === 'text' ? payload.text : null,
      status: 'sent',
      metaMessageId,
      sentAt: DateTime.now(),
    })

    return { data: message }
  }

  /**
   * @sendTemplate
   * @description Send a WhatsApp template message via Meta Cloud API and persist it locally
   * @tags WhatsApp
   */
  async sendTemplate({ request, response }: HttpContext) {
    const payload = await request.validateUsing(sendTemplateValidator)

    const templateBody: Record<string, unknown> = {
      name: payload.templateName,
      language: { code: payload.language ?? 'en' },
    }

    if (payload.components) {
      templateBody.components = payload.components
    }

    const body = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: payload.to,
      type: 'template',
      template: templateBody,
    }

    const url = `${whatsapp.baseUrl}/${whatsapp.apiVersion}/${whatsapp.phoneNumberId}/messages`

    const apiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${whatsapp.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const result = (await apiResponse.json()) as {
      messages?: { id: string }[]
      error?: unknown
    }

    if (!apiResponse.ok || result.error) {
      return response.status(apiResponse.status).json({
        data: { message: 'Failed to send WhatsApp template', error: result.error },
      })
    }

    const metaMessageId = result.messages?.[0]?.id ?? null

    const message = await WhatsAppMessage.create({
      conversationId: payload.conversationId,
      direction: 'sent',
      messageType: 'template',
      templateName: payload.templateName,
      status: 'sent',
      metaMessageId,
      sentAt: DateTime.now(),
    })

    return { data: message }
  }

  /**
   * @messages
   * @description Get WhatsApp messages between the authenticated user and a contact
   * @tags WhatsApp
   */
  async messages({ auth, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const campaignId = request.input('campaignId')
    const contactId = request.input('contactId')
    const page = request.input('page', 1)
    const limit = request.input('limit', 50)

    if (!campaignId) {
      return response.status(422).json({
        data: { message: 'campaignId is required' },
      })
    }
    if (!contactId) {
      return response.status(422).json({
        data: { message: 'contactId is required' },
      })
    }

    const campaignContact = await CampaignContact.query()
      .where('campaignId', campaignId)
      .where('contactId', contactId)
      .where('assignedUserId', currentUser.id)
      .first()

    if (!campaignContact) {
      return response.status(404).json({
        data: { message: 'Campaign contact not found' },
      })
    }

    let conversation = await WhatsAppConversation.query()
      .where('campaignContactId', campaignContact.id)
      .first()

    if (!conversation) {
      const contact = await Contact.find(contactId)
      const phone = contact?.mobile ?? contact?.phone ?? null

      if (!phone) {
        return response.status(422).json({
          data: { message: 'Contact has no phone number' },
        })
      }

      conversation = await WhatsAppConversation.create({
        campaignContactId: campaignContact.id,
        phone,
        status: 'active',
        startedAt: DateTime.now(),
      })
    }

    const messages = await WhatsAppMessage.query()
      .where('conversationId', conversation.id)
      .orderBy('sentAt', 'asc')
      .preload('conversation')
      .paginate(page, limit)

    return { data: { campaignContactId: campaignContact.id, conversationId: conversation.id, messages } }
  }

  /**
   * @webhookVerify
   * @description Verify the WhatsApp webhook subscription (Meta handshake)
   * @tags WhatsApp
   */
  async webhookVerify({ request, response }: HttpContext) {
    const mode = request.input('hub.mode')
    const token = request.input('hub.verify_token')
    const challenge = request.input('hub.challenge')

    if (mode === 'subscribe' && token === whatsapp.webhookVerifyToken) {
      return response.send(challenge)
    }

    return response.status(403).send('Verification failed')
  }

  /**
   * @webhookReceive
   * @description Receive WhatsApp webhook events and persist incoming messages locally
   * @tags WhatsApp
   */
  async webhookReceive({ request, response }: HttpContext) {
    console.log('Received WhatsApp webhook event:', JSON.stringify(request.body()))
    
    const body = request.body() as {
      entry?: { id?: string; changes?: { value?: WebhookValue }[] }[]
    }

    for (const entry of body.entry ?? []) {
      for (const change of entry.changes ?? []) {
        const value = change.value
        if (!value) continue

        if (value.messages?.length) {
          await this.processIncomingMessages(value.messages)
        }

        if (value.statuses?.length) {
          await this.processStatuses(value.statuses)
        }
      }
    }

    return response.status(200).json({ received: true })
  }

  private async processIncomingMessages(messages: WebhookMessage[]) {
    for (const message of messages) {
      try {
        const conversation = await this.findOrCreateConversation(message.from)

        if (!conversation) {
          logger.warn(
            `[whatsapp] No conversation found for inbound message from ${message.from}, skipping`
          )
          continue
        }

        await WhatsAppMessage.create({
          conversationId: conversation.id,
          direction: 'received',
          messageType: message.type,
          text: message.text?.body ?? null,
          mediaUrl: (await this.resolveMediaUrl(message)) ?? null,
          status: 'received',
          metaMessageId: message.id,
          sentAt: DateTime.fromSeconds(Number(message.timestamp)),
        })
      } catch (error) {
        logger.error(`[whatsapp] Failed to store inbound message ${message.id}: ${error}`)
      }
    }
  }

  private async processStatuses(statuses: WebhookStatus[]) {
    for (const status of statuses) {
      const message = await WhatsAppMessage.findBy('metaMessageId', status.id)
      if (!message) continue

      message.status = status.status
      if (status.status === 'delivered') {
        message.deliveredAt = DateTime.fromSeconds(Number(status.timestamp))
      } else if (status.status === 'read') {
        message.readAt = DateTime.fromSeconds(Number(status.timestamp))
      }
      await message.save()
    }
  }

  private async findOrCreateConversation(phone: string) {
    const existing = await WhatsAppConversation.query()
      .where('phone', phone)
      .orderBy('startedAt', 'desc')
      .first()

    if (existing) return existing

    const contact = await Contact.query().where('phone', phone).orWhere('mobile', phone).first()
    if (!contact) return null

    const campaignContact = await CampaignContact.query()
      .where('contactId', contact.id)
      .orderBy('createdAt', 'desc')
      .first()
    if (!campaignContact) return null

    return WhatsAppConversation.create({
      campaignContactId: campaignContact.id,
      phone,
      status: 'active',
      startedAt: DateTime.now(),
    })
  }

  private async resolveMediaUrl(message: WebhookMessage) {
    const media =
      message.image ?? message.video ?? message.audio ?? message.document ?? message.sticker
    if (!media) return null

    if (media.link) return media.link

    if (!media.id) return null

    try {
      const apiResponse = await fetch(`${whatsapp.baseUrl}/${whatsapp.apiVersion}/${media.id}`, {
        headers: { Authorization: `Bearer ${whatsapp.accessToken}` },
      })

      if (!apiResponse.ok) return null

      const body = (await apiResponse.json()) as { url?: string }
      return body.url ?? null
    } catch {
      return null
    }
  }
}
