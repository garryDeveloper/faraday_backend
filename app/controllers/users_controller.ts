import User from '#models/user'
import UserTransformer from '#transformers/user_transformer'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * @index
   * @description List all users (scoped by role)
   * @tags Users
   */
  async index({ auth, request, serialize }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const filterCompanyId = request.input('companyId')

    const query = User.query().preload('company')

    if (currentUser.role === 'seller') {
      query.where('id', currentUser.id)
    } else if (currentUser.role === 'supervisor' && currentUser.companyId) {
      query.where('companyId', currentUser.companyId)
    } else if (filterCompanyId) {
      query.where('companyId', filterCompanyId)
    }

    const paginated = await query.paginate(page, limit)

    return serialize(UserTransformer.paginate(paginated.all(), paginated.getMeta()))
  }

  /**
   * @store
   * @description Create a new user
   * @tags Users
   */
  async store({ auth, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const { companyId, role, password, ...data } = await request.validateUsing(createUserValidator)

    if (currentUser.role === 'admin') {
      if (role === 'admin' && companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Admin users can only be created in your own company' },
        })
      }
    } else if (currentUser.role === 'supervisor') {
      if (role === 'admin') {
        return response.forbidden({ data: { message: 'Cannot create admin users' } })
      }
      if (companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'Can only create users in your own company' },
        })
      }
    } else {
      return response.forbidden({ data: { message: 'Not authorized to create users' } })
    }

    const user = await User.create({ ...data, companyId, role, passwordHash: password })
    await user.load('company')

    return serialize(UserTransformer.transform(user))
  }

  /**
   * @show
   * @description Get a user by ID
   * @tags Users
   */
  async show({ auth, params, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const user = await User.query().preload('company').where('id', params.id).first()

    if (!user) {
      return response.notFound({ data: { message: 'User not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (user.companyId !== currentUser.companyId) {
        return response.forbidden({ data: { message: 'User does not belong to your company' } })
      }
    } else {
      if (user.id !== currentUser.id) {
        return response.forbidden({ data: { message: 'Cannot view other users' } })
      }
    }

    return serialize(UserTransformer.transform(user))
  }

  /**
   * @update
   * @description Update a user
   * @tags Users
   */
  async update({ auth, params, request, serialize, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const user = await User.query().preload('company').where('id', params.id).first()

    if (!user) {
      return response.notFound({ data: { message: 'User not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (user.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'User does not belong to your company' },
        })
      }
      if (user.role === 'admin') {
        return response.forbidden({ data: { message: 'Cannot modify admin users' } })
      }
    } else {
      if (user.id !== currentUser.id) {
        return response.forbidden({ data: { message: 'Cannot modify other users' } })
      }
    }

    const { email, role, companyId, password, ...rest } = await request.validateUsing(
      updateUserValidator
    )

    if (role !== undefined) {
      if (currentUser.role === 'admin') {
        if (role === 'admin' && (companyId ?? user.companyId) !== currentUser.companyId) {
          return response.forbidden({
            data: { message: 'Admin role can only be assigned in your own company' },
          })
        }
      } else if (currentUser.role === 'supervisor') {
        if (role === 'admin') {
          return response.forbidden({ data: { message: 'Cannot assign admin role' } })
        }
      }
      user.role = role
    }

    if (companyId !== undefined) {
      if (currentUser.role !== 'admin') {
        return response.forbidden({ data: { message: 'Cannot change company' } })
      }
      user.companyId = companyId
    }

    if (email !== undefined && email !== user.email) {
      const existing = await User.findBy('email', email)
      if (existing) {
        return response.conflict({ data: { message: 'Email already in use' } })
      }
      user.email = email
    }

    if (password !== undefined) {
      user.passwordHash = password
    }

    user.merge(rest)
    await user.save()

    return serialize(UserTransformer.transform(user))
  }

  /**
   * @destroy
   * @description Delete a user
   * @tags Users
   */
  async destroy({ auth, params, response }: HttpContext) {
    const currentUser = auth.getUserOrFail()
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ data: { message: 'User not found' } })
    }

    if (currentUser.role === 'admin') {
    } else if (currentUser.role === 'supervisor') {
      if (user.companyId !== currentUser.companyId) {
        return response.forbidden({
          data: { message: 'User does not belong to your company' },
        })
      }
      if (user.role === 'admin') {
        return response.forbidden({ data: { message: 'Cannot delete admin users' } })
      }
    } else {
      return response.forbidden({ data: { message: 'Not authorized to delete users' } })
    }

    await user.delete()

    return response.ok({ data: { message: 'User deleted' } })
  }
}
