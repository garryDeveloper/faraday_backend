/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/api/v1/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'admin.companies.companies.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/companies'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['index']>>>
    }
  }
  'admin.companies.companies.store': {
    methods: ["POST"]
    pattern: '/api/v1/admin/companies'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/company').createCompanyValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/company').createCompanyValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.companies.companies.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/companies/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['show']>>>
    }
  }
  'admin.companies.companies.update': {
    methods: ["PUT"]
    pattern: '/api/v1/admin/companies/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/company').updateCompanyValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/company').updateCompanyValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'admin.companies.companies.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/admin/companies/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/companies_controller').default['destroy']>>>
    }
  }
  'users.users.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['index']>>>
    }
  }
  'users.users.store': {
    methods: ["POST"]
    pattern: '/api/v1/users'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').createUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').createUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.users.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/users/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['show']>>>
    }
  }
  'users.users.update': {
    methods: ["PUT"]
    pattern: '/api/v1/users/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').updateUserValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/user').updateUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.users.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/users/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroy']>>>
    }
  }
  'contacts.contacts.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/contacts'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['index']>>>
    }
  }
  'contacts.contacts.store': {
    methods: ["POST"]
    pattern: '/api/v1/contacts'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/contact').createContactValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/contact').createContactValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'contacts.contacts.import': {
    methods: ["POST"]
    pattern: '/api/v1/contacts/import'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['import']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['import']>>>
    }
  }
  'contacts.contacts.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/contacts/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['show']>>>
    }
  }
  'contacts.contacts.update': {
    methods: ["PUT"]
    pattern: '/api/v1/contacts/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/contact').updateContactValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/contact').updateContactValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'contacts.contacts.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/contacts/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contacts_controller').default['destroy']>>>
    }
  }
  'contactLists.contact_lists.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/contact-lists'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['index']>>>
    }
  }
  'contactLists.contact_lists.store': {
    methods: ["POST"]
    pattern: '/api/v1/contact-lists'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/contact_list').createContactListValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/contact_list').createContactListValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'contactLists.contact_lists.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/contact-lists/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['show']>>>
    }
  }
  'contactLists.contact_lists.update': {
    methods: ["PUT"]
    pattern: '/api/v1/contact-lists/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/contact_list').updateContactListValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/contact_list').updateContactListValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'contactLists.contact_lists.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/contact-lists/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['destroy']>>>
    }
  }
  'contactLists.contact_lists.attach_contacts': {
    methods: ["POST"]
    pattern: '/api/v1/contact-lists/:id/contacts'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['attachContacts']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['attachContacts']>>>
    }
  }
  'contactLists.contact_lists.detach_contact': {
    methods: ["DELETE"]
    pattern: '/api/v1/contact-lists/:id/contacts/:contactId'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['detachContact']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_lists_controller').default['detachContact']>>>
    }
  }
  'campaigns.campaigns.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campaigns'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['index']>>>
    }
  }
  'campaigns.campaigns.store': {
    methods: ["POST"]
    pattern: '/api/v1/campaigns'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campaign').createCampaignValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/campaign').createCampaignValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campaigns.campaigns.statuses': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campaigns/contact-statuses'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['statuses']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['statuses']>>>
    }
  }
  'campaigns.campaigns.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campaigns/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['show']>>>
    }
  }
  'campaigns.campaigns.update': {
    methods: ["PUT"]
    pattern: '/api/v1/campaigns/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campaign').updateCampaignValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/campaign').updateCampaignValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campaigns.campaigns.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/campaigns/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['destroy']>>>
    }
  }
  'campaigns.campaigns.contacts': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campaigns/:id/contacts'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['contacts']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['contacts']>>>
    }
  }
  'campaigns.campaigns.contact_status': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/status'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['contactStatus']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['contactStatus']>>>
    }
  }
  'campaigns.campaigns.update_contact_status': {
    methods: ["PUT"]
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/status'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campaign').updateCampaignContactStatusValidator)>>
      paramsTuple: [ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/campaign').updateCampaignContactStatusValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['updateContactStatus']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['updateContactStatus']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campaigns.campaigns.notes': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['notes']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['notes']>>>
    }
  }
  'campaigns.campaigns.store_note': {
    methods: ["POST"]
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campaign').createNoteValidator)>>
      paramsTuple: [ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/campaign').createNoteValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['storeNote']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['storeNote']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campaigns.campaigns.update_note': {
    methods: ["PUT"]
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/campaign').updateNoteValidator)>>
      paramsTuple: [ParamValue, ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue; noteId: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/campaign').updateNoteValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['updateNote']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['updateNote']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'campaigns.campaigns.destroy_note': {
    methods: ["DELETE"]
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue, ParamValue]
      params: { id: ParamValue; contactId: ParamValue; noteId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['destroyNote']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campaigns_controller').default['destroyNote']>>>
    }
  }
  'teams.teams.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/teams'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['index']>>>
    }
  }
  'teams.teams.store': {
    methods: ["POST"]
    pattern: '/api/v1/teams'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/team').createTeamValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/team').createTeamValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'teams.teams.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/teams/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['show']>>>
    }
  }
  'teams.teams.update': {
    methods: ["PUT"]
    pattern: '/api/v1/teams/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/team').updateTeamValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/team').updateTeamValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'teams.teams.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/teams/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['destroy']>>>
    }
  }
  'teams.teams.assign_users': {
    methods: ["POST"]
    pattern: '/api/v1/teams/:id/users'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['assignUsers']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['assignUsers']>>>
    }
  }
  'teams.teams.detach_user': {
    methods: ["DELETE"]
    pattern: '/api/v1/teams/:id/users/:userId'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { id: ParamValue; userId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['detachUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teams_controller').default['detachUser']>>>
    }
  }
  'tasks.tasks.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/tasks'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['index']>>>
    }
  }
  'tasks.tasks.store': {
    methods: ["POST"]
    pattern: '/api/v1/tasks'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/task').createTaskValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/task').createTaskValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'tasks.tasks.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/tasks/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['show']>>>
    }
  }
  'tasks.tasks.update': {
    methods: ["PUT"]
    pattern: '/api/v1/tasks/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/task').updateTaskValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/task').updateTaskValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'tasks.tasks.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/tasks/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['destroy']>>>
    }
  }
  'whatsapp.webhook.whats_app.webhook_verify': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/whatsapp/webhook'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['webhookVerify']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['webhookVerify']>>>
    }
  }
  'whatsapp.webhook.whats_app.webhook_receive': {
    methods: ["POST"]
    pattern: '/api/v1/whatsapp/webhook'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['webhookReceive']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['webhookReceive']>>>
    }
  }
  'whatsapp.whats_app.templates': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/whatsapp/templates'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['templates']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['templates']>>>
    }
  }
  'whatsapp.whats_app.send': {
    methods: ["POST"]
    pattern: '/api/v1/whatsapp/send'
    types: {
      body: ExtractBody<InferInput<(typeof import('#app/validators/whatsapp').sendMessageValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#app/validators/whatsapp').sendMessageValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['send']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['send']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'whatsapp.whats_app.send_template': {
    methods: ["POST"]
    pattern: '/api/v1/whatsapp/send-template'
    types: {
      body: ExtractBody<InferInput<(typeof import('#app/validators/whatsapp').sendTemplateValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#app/validators/whatsapp').sendTemplateValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['sendTemplate']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['sendTemplate']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'whatsapp.whats_app.messages': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/whatsapp/messages'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['messages']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/whats_app_controller').default['messages']>>>
    }
  }
}
