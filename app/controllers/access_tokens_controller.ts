import User from '#models/user'
import { loginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class AccessTokensController {
  /**
   * @store
   * @description Authenticate user and return access token
   * @tags Auth
   * @requestBody {"email":"admin@faraday.com","password":"admin123"}
   * @responseBody 200 - <User> with token
   * @responseBody 400 - Invalid credentials
   */
  async store({ request, serialize }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }

  /**
   * @destroy
   * @description Revoke current access token
   * @tags Auth
   * @responseBody 200 - Logged out successfully
   * @responseBody 401 - Unauthorized
   */
  async destroy({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    if (user.currentAccessToken) {
      await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    }

    return {
      message: 'Logged out successfully',
    }
  }
}
