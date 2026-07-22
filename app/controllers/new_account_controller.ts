import User from '#models/user'
import { signupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class NewAccountController {
  /**
   * @store
   * @description Register a new user account
   * @tags Auth
   * @requestBody {"firstName":"John","lastName":"Doe","email":"john@example.com","password":"secret1234","passwordConfirmation":"secret1234"}
   * @responseBody 201 - <User> with token
   */
  async store({ request, serialize }: HttpContext) {
    const { firstName, lastName, email, password } = await request.validateUsing(signupValidator)

    const user = await User.create({ firstName, lastName, email, passwordHash: password })
    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }
}
