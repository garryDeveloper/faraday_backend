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

    router
      .group(() => {
        router.get('', [controllers.ContactLists, 'index'])
        router.post('', [controllers.ContactLists, 'store'])
        router.get('/:id', [controllers.ContactLists, 'show'])
        router.put('/:id', [controllers.ContactLists, 'update'])
        router.delete('/:id', [controllers.ContactLists, 'destroy'])
        router.post('/:id/contacts', [controllers.ContactLists, 'attachContacts'])
        router.delete('/:id/contacts/:contactId', [controllers.ContactLists, 'detachContact'])
      })
      .prefix('contact-lists')
      .as('contactLists')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('', [controllers.Campaigns, 'index'])
        router.post('', [controllers.Campaigns, 'store'])
        router.get('contact-statuses', [controllers.Campaigns, 'statuses'])
        router.get('/:id', [controllers.Campaigns, 'show'])
        router.put('/:id', [controllers.Campaigns, 'update'])
        router.delete('/:id', [controllers.Campaigns, 'destroy'])
        router.get('/:id/contacts', [controllers.Campaigns, 'contacts'])
        router.get('/:id/contacts/:contactId/status', [controllers.Campaigns, 'contactStatus'])
        router.put('/:id/contacts/:contactId/status', [
          controllers.Campaigns,
          'updateContactStatus',
        ])
        router.get('/:id/contacts/:contactId/notes', [controllers.Campaigns, 'notes'])
        router.post('/:id/contacts/:contactId/notes', [controllers.Campaigns, 'storeNote'])
        router.put('/:id/contacts/:contactId/notes/:noteId', [controllers.Campaigns, 'updateNote'])
        router.delete('/:id/contacts/:contactId/notes/:noteId', [
          controllers.Campaigns,
          'destroyNote',
        ])
      })
      .prefix('campaigns')
      .as('campaigns')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('', [controllers.Teams, 'index'])
        router.post('', [controllers.Teams, 'store'])
        router.get('/:id', [controllers.Teams, 'show'])
        router.put('/:id', [controllers.Teams, 'update'])
        router.delete('/:id', [controllers.Teams, 'destroy'])
        router.post('/:id/users', [controllers.Teams, 'assignUsers'])
        router.delete('/:id/users/:userId', [controllers.Teams, 'detachUser'])
      })
      .prefix('teams')
      .as('teams')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('', [controllers.Tasks, 'index'])
        router.post('', [controllers.Tasks, 'store'])
        router.get('/:id', [controllers.Tasks, 'show'])
        router.put('/:id', [controllers.Tasks, 'update'])
        router.delete('/:id', [controllers.Tasks, 'destroy'])
      })
      .prefix('tasks')
      .as('tasks')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('webhook', [controllers.WhatsApp, 'webhookVerify'])
        router.post('webhook', [controllers.WhatsApp, 'webhookReceive'])
      })
      .prefix('whatsapp')
      .as('whatsapp.webhook')

    router
      .group(() => {
        router.get('templates', [controllers.WhatsApp, 'templates'])
        router.post('send', [controllers.WhatsApp, 'send'])
        router.post('send-template', [controllers.WhatsApp, 'sendTemplate'])
        router.get('messages', [controllers.WhatsApp, 'messages'])
      })
      .prefix('whatsapp')
      .as('whatsapp')
      .use(middleware.auth())
  })
  .prefix('/api/v1')
