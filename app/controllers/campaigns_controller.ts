import Campaign from '#models/campaign'
import CampaignContact from '#models/campaign_contact'
import Note from '#models/note'
import CampaignTransformer from '#transformers/campaign_transformer'
import CampaignDistributionService from '#services/campaign_distribution_service'
import {
  createCampaignValidator,
  updateCampaignValidator,
  updateCampaignContactStatusValidator,
  createNoteValidator,
  updateNoteValidator,
} from '#validators/campaign'
import { getCampaignContactStatuses } from '../utils/campaign_status_utils.ts'
import type { HttpContext } from '@adonisjs/core/http'

export default class CampaignsController {
  async index({ auth, request, serialize }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const filterCompanyId = request.input('companyId')

    const query = Campaign.query()
      .preload('company')
      .preload('creator')
      .preload('lists')
      .preload('teams')
      .preload('distributions', (query) => query.preload('team').preload('contactList'))

    if (
      (currentUser.role === 'seller' || currentUser.role === 'supervisor') &&
      currentUser.companyId
    ) {
      query.where('companyId', currentUser.companyId)
    } else if (filterCompanyId) {
      query.where('companyId', filterCompanyId)
    }

    const paginated = await query.paginate(page, limit)

    return serialize(CampaignTransformer.paginate(paginated.all(), paginated.getMeta()))
  }

  async store({ auth, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { companyId, listIds, teamIds, distributions, ...data } = await request.validateUsing(createCampaignValidator)

    if (currentUser.role === 'seller' || currentUser.role === 'supervisor') {
      if (companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Can only create campaigns in your own company' },
        })
      }
    }

    const campaign = await Campaign.create({ ...data, type: data.type ?? 'whatsapp', companyId, createdBy: currentUser.id })

    if (listIds && listIds.length > 0) {
      await campaign.related('lists').attach(listIds)
    }
    if (teamIds && teamIds.length > 0) {
      await campaign.related('teams').attach(teamIds)
    }

    if (distributions && distributions.length > 0) {
      const service = new CampaignDistributionService()
      await service.processDistributions(campaign, distributions as any)
    }

    await campaign.load('company')
    await campaign.load('creator')
    await campaign.load('lists')
    await campaign.load('teams')
    await campaign.load('distributions', (query) => query.preload('team').preload('contactList'))

    return serialize(CampaignTransformer.transform(campaign))
  }

  async show({ auth, params, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const campaign = await Campaign.query()
      .preload('company')
      .preload('creator')
      .preload('lists')
      .preload('teams')
      .preload('distributions', (query) => query.preload('team').preload('contactList'))
      .where('id', params.id)
      .first()

    if (!campaign) {
      return response.notFound({ data: { message: 'Campaign not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (campaign.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Campaign does not belong to your company' },
        })
      }
    } else {
      if (campaign.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Campaign does not belong to your company' },
        })
      }
    }

    return serialize(CampaignTransformer.transform(campaign))
  }

  async update({ auth, params, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const campaign = await Campaign.query()
      .preload('company')
      .preload('creator')
      .preload('lists')
      .preload('teams')
      .preload('distributions', (query) => query.preload('team').preload('contactList'))
      .where('id', params.id)
      .first()

    if (!campaign) {
      return response.notFound({ data: { message: 'Campaign not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (campaign.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Campaign does not belong to your company' },
        })
      }
    } else {
      if (campaign.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Campaign does not belong to your company' },
        })
      }
    }

    const { listIds, teamIds, distributions, ...data } = await request.validateUsing(updateCampaignValidator)

    campaign.merge(data)
    await campaign.save()

    if (listIds !== undefined) {
      await campaign.related('lists').sync(listIds)
    }
    if (teamIds !== undefined) {
      await campaign.related('teams').sync(teamIds)
    }

    if (distributions !== undefined) {
      const service = new CampaignDistributionService()
      await service.processDistributions(campaign, distributions as any)
    }

    await campaign.load('lists')
    await campaign.load('teams')
    await campaign.load('distributions', (query) => query.preload('team').preload('contactList'))

    return serialize(CampaignTransformer.transform(campaign))
  }

  async destroy({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const campaign = await Campaign.find(params.id)

    if (!campaign) {
      return response.notFound({ data: { message: 'Campaign not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (campaign.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Campaign does not belong to your company' },
        })
      }
    } else {
      if (campaign.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Campaign does not belong to your company' },
        })
      }
    }

    await campaign.delete()

    return response.ok({ data: { message: 'Campaign deleted' } })
  }

  /**
   * @statuses
   * @description Get the possible contact statuses for a campaign, localized by the given language (defaults to es)
   * @tags Campaigns
   */
  async statuses({ request }: HttpContext) {
    const language = request.input('language', 'es')
    return { data: getCampaignContactStatuses(language) }
  }

  /**
   * @contactStatus
   * @description Get the status of a contact within a campaign
   * @tags Campaigns
   */
  async contactStatus({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()

    const campaign = await Campaign.find(params.id)
    if (!campaign) {
      return response.notFound({ data: { message: 'Campaign not found' } })
    }

    if (currentUser.role !== 'admin' && campaign.companyId !== currentUser.companyId) {
      return response.forbidden({
        data: { message: 'Campaign does not belong to your company' },
      })
    }

    const campaignContact = await CampaignContact.query()
      .where('campaignId', params.id)
      .where('contactId', params.contactId)
      .first()

    if (!campaignContact) {
      return response.notFound({ data: { message: 'Contact not found in campaign' } })
    }

    return response.ok({ data: { status: campaignContact.status } })
  }

  /**
   * @updateContactStatus
   * @description Update the status of a contact within a campaign
   * @tags Campaigns
   */
  async updateContactStatus({ auth, params, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { status } = await request.validateUsing(updateCampaignContactStatusValidator)

    const campaign = await Campaign.find(params.id)
    if (!campaign) {
      return response.notFound({ data: { message: 'Campaign not found' } })
    }

    if (currentUser.role !== 'admin' && campaign.companyId !== currentUser.companyId) {
      return response.forbidden({
        data: { message: 'Campaign does not belong to your company' },
      })
    }

    const campaignContact = await CampaignContact.query()
      .where('campaignId', params.id)
      .where('contactId', params.contactId)
      .first()

    if (!campaignContact) {
      return response.notFound({ data: { message: 'Contact not found in campaign' } })
    }

    campaignContact.status = status
    await campaignContact.save()

    return response.ok({ data: campaignContact })
  }

  /**
   * @contacts
   * @description Get contacts assigned to the logged user for a given campaign, with a flag indicating if a message was sent
   * @tags Campaigns
   */
  async contacts({ auth, params, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const campaign = await Campaign.find(params.id)
    if (!campaign) {
      return response.notFound({ data: { message: 'Campaign not found' } })
    }

    if (currentUser.role !== 'admin' && campaign.companyId !== currentUser.companyId) {
      return response.forbidden({
        data: { message: 'Campaign does not belong to your company' },
      })
    }

    const paginated = await CampaignContact.query()
      .where('campaignId', params.id)
      .where('assignedUserId', currentUser.id)
      .preload('contact')
      .preload('whatsappConversations', (query) => {
        query.preload('messages', (msgQuery) => msgQuery.where('direction', 'sent').select('id').limit(1))
      })
      .paginate(page, limit)

    const result = paginated.all().map((cc) => {
      const hasSentMessage = cc.whatsappConversations.some(
        (conv) => conv.messages.length > 0
      )
      return {
        ...cc.contact.serialize(),
        campaignContactId: cc.id,
        status: cc.status,
        hasSentMessage,
      }
    })

    return { data: result, meta: paginated.getMeta() }
  }

  /**
   * @notes
   * @description Get the notes of a contact within a campaign
   * @tags Campaigns
   */
  async notes({ auth, params, request, response }: HttpContext) {
    const campaignContact = await this.findCampaignContact({ auth, response }, params.id, params.contactId)
    if (!campaignContact) return

    const page = request.input('page', 1)
    const limit = request.input('limit', 20)

    const paginated = await Note.query()
      .where('campaignContactId', campaignContact.id)
      .preload('user')
      .orderBy('createdAt', 'desc')
      .paginate(page, limit)

    return { data: paginated.all().map((note) => note.serialize()), meta: paginated.getMeta() }
  }

  /**
   * @storeNote
   * @description Add a note to a contact within a campaign
   * @tags Campaigns
   */
  async storeNote({ auth, params, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const campaignContact = await this.findCampaignContact({ auth, response }, params.id, params.contactId)
    if (!campaignContact) return

    const { text } = await request.validateUsing(createNoteValidator)

    const note = await Note.create({
      campaignContactId: campaignContact.id,
      userId: currentUser.id,
      text,
    })

    await note.load('user')

    return response.created({ data: note.serialize() })
  }

  /**
   * @updateNote
   * @description Update a note of a contact within a campaign
   * @tags Campaigns
   */
  async updateNote({ auth, params, request, response }: HttpContext) {
    const campaignContact = await this.findCampaignContact({ auth, response }, params.id, params.contactId)
    if (!campaignContact) return

    const note = await Note.query()
      .where('id', params.noteId)
      .where('campaignContactId', campaignContact.id)
      .first()

    if (!note) {
      return response.notFound({ data: { message: 'Note not found' } })
    }

    const { text } = await request.validateUsing(updateNoteValidator)

    note.text = text
    await note.save()

    await note.load('user')

    return response.ok({ data: note.serialize() })
  }

  /**
   * @destroyNote
   * @description Delete a note of a contact within a campaign
   * @tags Campaigns
   */
  async destroyNote({ auth, params, response }: HttpContext) {
    const campaignContact = await this.findCampaignContact({ auth, response }, params.id, params.contactId)
    if (!campaignContact) return

    const note = await Note.query()
      .where('id', params.noteId)
      .where('campaignContactId', campaignContact.id)
      .first()

    if (!note) {
      return response.notFound({ data: { message: 'Note not found' } })
    }

    await note.delete()

    return response.ok({ data: { message: 'Note deleted' } })
  }

  private async findCampaignContact(
    ctx: Pick<HttpContext, 'auth' | 'response'>,
    campaignId: number | string,
    contactId: number | string
  ) {
    const { auth, response } = ctx
    const currentUser = auth.getUserOrFail()

    const campaign = await Campaign.find(campaignId)
    if (!campaign) {
      return response.abort({ data: { message: 'Campaign not found' } }, 404)
    }

    if (currentUser.role !== 'admin' && campaign.companyId !== currentUser.companyId) {
      return response.abort({ data: { message: 'Campaign does not belong to your company' } }, 403)
    }

    const campaignContact = await CampaignContact.query()
      .where('campaignId', campaignId)
      .where('contactId', contactId)
      .first()

    if (!campaignContact) {
      return response.abort({ data: { message: 'Contact not found in campaign' } }, 404)
    }

    return campaignContact
  }
}
