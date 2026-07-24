import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

router.get('/', () => {
  return { hello: 'world' }
})

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('companies', [controllers.Companies, 'index'])
        router.post('companies', [controllers.Companies, 'store'])
        router.get('companies/:id', [controllers.Companies, 'show'])
        router.put('companies/:id', [controllers.Companies, 'update'])
        router.delete('companies/:id', [controllers.Companies, 'destroy'])
      })
      .prefix('admin')
      .as('admin.companies')
      .use(middleware.auth())
      .use(middleware.admin())

    router
      .group(() => {
        router.get('', [controllers.Users, 'index'])
        router.post('', [controllers.Users, 'store'])
        router.get('/:id', [controllers.Users, 'show'])
        router.put('/:id', [controllers.Users, 'update'])
        router.delete('/:id', [controllers.Users, 'destroy'])
      })
      .prefix('users')
      .as('users')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('', [controllers.Contacts, 'index'])
        router.post('', [controllers.Contacts, 'store'])
        router.post('import', [controllers.Contacts, 'import'])
        router.get('/:id', [controllers.Contacts, 'show'])
        router.put('/:id', [controllers.Contacts, 'update'])
        router.delete('/:id', [controllers.Contacts, 'destroy'])
      })
      .prefix('contacts')
      .as('contacts')
      .use(middleware.auth())
  })
  .prefix('/api/v1')
