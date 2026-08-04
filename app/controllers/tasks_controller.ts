import CampaignContact from '#models/campaign_contact'
import Task from '#models/task'
import User from '#models/user'
import TaskTransformer from '#transformers/task_transformer'
import { createTaskValidator, updateTaskValidator } from '#validators/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  /**
   * @index
   * @description List tasks (scoped by role). Filters: campaignContactId, assignedUserId, status, companyId
   * @tags Tasks
   */
  async index({ auth, request, serialize }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const filterCompanyId = request.input('companyId')

    const query = Task.query()
      .preload('campaignContact', (campaignContactQuery) => {
        campaignContactQuery.preload('campaign').preload('contact')
      })
      .preload('assignedUser')

    if (
      (currentUser.role === 'seller' || currentUser.role === 'supervisor') &&
      currentUser.companyId
    ) {
      const companyId = currentUser.companyId
      query.whereHas('campaignContact', (ccQuery) => {
        ccQuery.whereHas('campaign', (campaignQuery) => {
          campaignQuery.where('companyId', companyId)
        })
      })
    } else if (filterCompanyId) {
      query.whereHas('campaignContact', (ccQuery) => {
        ccQuery.whereHas('campaign', (campaignQuery) => {
          campaignQuery.where('companyId', filterCompanyId)
        })
      })
    }

    const campaignContactId = request.input('campaignContactId')
    const assignedUserId = request.input('assignedUserId')
    const status = request.input('status')

    if (campaignContactId) {
      query.where('campaignContactId', campaignContactId)
    }
    if (assignedUserId) {
      query.where('assignedUserId', assignedUserId)
    }
    if (status) {
      query.where('status', status)
    }

    query.orderBy('dueDate', 'desc')
    const paginated = await query.paginate(page, limit)

    return serialize(TaskTransformer.paginate(paginated.all(), paginated.getMeta()))
  }

  /**
   * @store
   * @description Create a new task
   * @tags Tasks
   */
  async store({ auth, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { campaignContactId, assignedUserId, ...data } =
      await request.validateUsing(createTaskValidator)

    const campaignContact = await CampaignContact.query()
      .preload('campaign')
      .where('id', campaignContactId)
      .first()

    if (!campaignContact) {
      return response.notFound({ data: { message: 'Campaign contact not found' } })
    }

    if (
      currentUser.role !== 'admin' &&
      campaignContact.campaign.companyId !== currentUser.companyId
    ) {
      return response.forbidden({
        data: { message: 'Cannot create a task for a contact outside your company' },
      })
    }

    if (
      assignedUserId &&
      !(await this.validAssignedUser(assignedUserId, campaignContact.campaign.companyId))
    ) {
      return response.badRequest({
        data: { message: 'Assigned user was not found or does not belong to the same company' },
      })
    }

    const task = await Task.create({
      campaignContactId,
      assignedUserId: assignedUserId ?? null,
      ...data,
    })

    return serialize(TaskTransformer.transform(await this.load(task)))
  }

  /**
   * @show
   * @description Get a task by ID
   * @tags Tasks
   */
  async show({ auth, params, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const task = await this.load(params.id)

    if (!task) {
      return response.notFound({ data: { message: 'Task not found' } })
    }

    if (
      currentUser.role !== 'admin' &&
      task.campaignContact?.campaign?.companyId !== currentUser.companyId
    ) {
      return response.forbidden({ data: { message: 'Task does not belong to your company' } })
    }

    return serialize(TaskTransformer.transform(task))
  }

  /**
   * @update
   * @description Update a task
   * @tags Tasks
   */
  async update({ auth, params, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const task = await this.load(params.id)

    if (!task) {
      return response.notFound({ data: { message: 'Task not found' } })
    }

    if (
      currentUser.role !== 'admin' &&
      task.campaignContact?.campaign?.companyId !== currentUser.companyId
    ) {
      return response.forbidden({ data: { message: 'Task does not belong to your company' } })
    }

    const { campaignContactId, assignedUserId, ...data } =
      await request.validateUsing(updateTaskValidator)

    if (campaignContactId) {
      const campaignContact = await CampaignContact.query()
        .preload('campaign')
        .where('id', campaignContactId)
        .first()
      if (!campaignContact) {
        return response.notFound({ data: { message: 'Campaign contact not found' } })
      }
      if (
        currentUser.role !== 'admin' &&
        campaignContact.campaign.companyId !== currentUser.companyId
      ) {
        return response.forbidden({
          data: { message: 'Cannot move a task to a contact outside your company' },
        })
      }
      task.campaignContactId = campaignContactId
    }

    if (assignedUserId !== undefined) {
      const companyId = task.campaignContact?.campaign?.companyId
      if (
        assignedUserId &&
        companyId &&
        !(await this.validAssignedUser(assignedUserId, companyId))
      ) {
        return response.badRequest({
          data: { message: 'Assigned user was not found or does not belong to the same company' },
        })
      }
      task.assignedUserId = assignedUserId
    }

    task.merge(data)
    await task.save()

    return serialize(TaskTransformer.transform(await this.load(task)))
  }

  /**
   * @destroy
   * @description Delete a task
   * @tags Tasks
   */
  async destroy({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const task = await this.load(params.id)

    if (!task) {
      return response.notFound({ data: { message: 'Task not found' } })
    }

    if (
      currentUser.role !== 'admin' &&
      task.campaignContact?.campaign?.companyId !== currentUser.companyId
    ) {
      return response.forbidden({ data: { message: 'Task does not belong to your company' } })
    }

    await task.delete()

    return response.ok({ data: { message: 'Task deleted' } })
  }

  private async validAssignedUser(userId: number, companyId: number) {
    const user = await User.query().where('id', userId).where('companyId', companyId).first()
    return !!user
  }

  private async load(task: Task | number | string | null) {
    let found: Task | null
    if (task instanceof Task) {
      found = task
    } else if (task === null) {
      found = null
    } else {
      found = await Task.find(task)
    }
    if (!found) return found
    await found.load('campaignContact', (campaignContactQuery) => {
      campaignContactQuery.preload('campaign').preload('contact')
    })
    await found.load('assignedUser')
    return found
  }
}
