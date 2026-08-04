import Campaign from '#models/campaign'
import CampaignDistribution from '#models/campaign_distribution'
import CampaignContact from '#models/campaign_contact'
import Team from '#models/team'
import ContactList from '#models/contact_list'

interface DistributionAssignment {
  sellerId: number
  contactIds: number[]
}

interface DistributionInput {
  teamId: number
  contactListId: number
  distributionType: 'manual' | 'round_robin' | 'balanced'
  assignments?: DistributionAssignment[]
}

export default class CampaignDistributionService {
  async processDistributions(campaign: Campaign, distributions: DistributionInput[]): Promise<void> {
    await CampaignDistribution.query().where('campaignId', campaign.id).delete()
    await CampaignContact.query().where('campaignId', campaign.id).delete()

    for (const dist of distributions) {
      await CampaignDistribution.create({
        campaignId: campaign.id,
        teamId: dist.teamId,
        contactListId: dist.contactListId,
        distributionType: dist.distributionType,
      })

      const team = await Team.query()
        .where('id', dist.teamId)
        .preload('users')
        .firstOrFail()

      const contactList = await ContactList.query()
        .where('id', dist.contactListId)
        .preload('contacts')
        .firstOrFail()

      const contactIds = contactList.contacts.map((c) => c.id)
      const sellers = team.users

      switch (dist.distributionType) {
        case 'manual':
          await this.assignManual(campaign, dist.assignments!)
          break
        case 'round_robin':
          await this.assignRoundRobin(campaign, contactIds, sellers)
          break
        case 'balanced':
          await this.assignBalanced(campaign, contactIds, sellers)
          break
      }
    }
  }

  private async assignManual(
    campaign: Campaign,
    assignments: DistributionAssignment[]
  ): Promise<void> {
    const records: any[] = []
    for (const assignment of assignments) {
      for (const contactId of assignment.contactIds) {
        records.push({
          campaignId: campaign.id,
          contactId,
          assignedUserId: assignment.sellerId,
          status: 'nuevo',
          priority: 0,
          attempts: 0,
        })
      }
    }
    if (records.length > 0) {
      await CampaignContact.createMany(records)
    }
  }

  private async assignRoundRobin(
    campaign: Campaign,
    contactIds: number[],
    sellers: any[]
  ): Promise<void> {
    if (sellers.length === 0 || contactIds.length === 0) return

    const records: any[] = []
    for (let i = 0; i < contactIds.length; i++) {
      records.push({
        campaignId: campaign.id,
        contactId: contactIds[i],
        assignedUserId: sellers[i % sellers.length].id,
        status: 'nuevo',
        priority: 0,
        attempts: 0,
      })
    }
    await CampaignContact.createMany(records)
  }

  private async assignBalanced(
    campaign: Campaign,
    contactIds: number[],
    sellers: any[]
  ): Promise<void> {
    if (sellers.length === 0 || contactIds.length === 0) return

    const sellerIds = sellers.map((s) => s.id)
    const workload = await this.getSellerWorkload(sellerIds, campaign.id)

    const sortedSellers = [...sellers].sort(
      (a, b) => (workload[a.id] ?? 0) - (workload[b.id] ?? 0)
    )

    const records: any[] = []
    for (let i = 0; i < contactIds.length; i++) {
      const seller = sortedSellers[i % sortedSellers.length]
      records.push({
        campaignId: campaign.id,
        contactId: contactIds[i],
        assignedUserId: seller.id,
        status: 'nuevo',
        priority: 0,
        attempts: 0,
      })
    }
    await CampaignContact.createMany(records)
  }

  private async getSellerWorkload(
    sellerIds: number[],
    excludeCampaignId: number
  ): Promise<Record<number, number>> {
    const activeCampaignIds: { id: number }[] = await Campaign.query()
      .select('id')
      .where('status', 'active')
      .where('id', '!=', excludeCampaignId)

    if (activeCampaignIds.length === 0) {
      const result: Record<number, number> = {}
      for (const id of sellerIds) result[id] = 0
      return result
    }

    const rows = await CampaignContact.query()
      .whereIn('assignedUserId', sellerIds)
      .whereIn(
        'campaignId',
        activeCampaignIds.map((c) => c.id)
      )
      .groupBy('assignedUserId')
      .select('assignedUserId')
      .count('* as total')

    const workload: Record<number, number> = {}
    for (const id of sellerIds) workload[id] = 0

    for (const row of rows) {
      if (row.assignedUserId !== null) {
        workload[row.assignedUserId] = Number(row.$extras.total)
      }
    }

    return workload
  }
}
