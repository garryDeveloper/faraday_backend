import Team from '#models/team'
import User from '#models/user'
import TeamTransformer from '#transformers/team_transformer'
import { createTeamValidator, updateTeamValidator } from '#validators/team'
import type { HttpContext } from '@adonisjs/core/http'

export default class TeamsController {
  async index({ auth, request, serialize }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const filterCompanyId = request.input('companyId')

    const query = Team.query().preload('company').preload('leader').preload('users')

    if (
      (currentUser.role === 'seller' || currentUser.role === 'supervisor') &&
      currentUser.companyId
    ) {
      query.where('companyId', currentUser.companyId)
    } else if (filterCompanyId) {
      query.where('companyId', filterCompanyId)
    }

    const paginated = await query.paginate(page, limit)

    return serialize(TeamTransformer.paginate(paginated.all(), paginated.getMeta()))
  }

  async store({ auth, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { companyId, ...data } = await request.validateUsing(createTeamValidator)

    if (currentUser.role === 'seller' || currentUser.role === 'supervisor') {
      if (companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Can only create teams in your own company' },
        })
      }
    }

    const team = await Team.create({ ...data, companyId })
    await team.load('company')
    await team.load('leader')
    await team.load('users')

    return serialize(TeamTransformer.transform(team))
  }

  async show({ auth, params, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const team = await Team.query()
      .preload('company')
      .preload('leader')
      .preload('users')
      .where('id', params.id)
      .first()

    if (!team) {
      return response.notFound({ data: { message: 'Team not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    } else {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    }

    return serialize(TeamTransformer.transform(team))
  }

  async update({ auth, params, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const team = await Team.query()
      .preload('company')
      .preload('leader')
      .preload('users')
      .where('id', params.id)
      .first()

    if (!team) {
      return response.notFound({ data: { message: 'Team not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    } else {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    }

    const data = await request.validateUsing(updateTeamValidator)

    team.merge(data)
    await team.save()

    return serialize(TeamTransformer.transform(team))
  }

  async destroy({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const team = await Team.find(params.id)

    if (!team) {
      return response.notFound({ data: { message: 'Team not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    } else {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    }

    await team.delete()

    return response.ok({ data: { message: 'Team deleted' } })
  }

  async assignUsers({ auth, params, request, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const team = await Team.query().preload('company').where('id', params.id).first()

    if (!team) {
      return response.notFound({ data: { message: 'Team not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    } else {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    }

    const { userIds } = request.only(['userIds']) as { userIds: number[] }

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return response.badRequest({ data: { message: 'userIds must be a non-empty array' } })
    }

    const users = await User.query()
      .whereIn('id', userIds)
      .where('companyId', team.companyId)

    if (users.length !== userIds.length) {
      return response.badRequest({
        data: { message: 'One or more users were not found or do not belong to the same company' },
      })
    }

    await team.related('users').attach(userIds)

    return response.ok({ data: { message: 'Users assigned successfully' } })
  }

  async detachUser({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const team = await Team.query().preload('company').where('id', params.id).first()

    if (!team) {
      return response.notFound({ data: { message: 'Team not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    } else {
      if (team.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Team does not belong to your company' },
        })
      }
    }

    await team.related('users').detach([params.userId])

    return response.ok({ data: { message: 'User detached successfully' } })
  }
}
