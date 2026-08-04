/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'admin.companies.companies.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/companies',
    tokens: [{"old":"/api/v1/admin/companies","type":0,"val":"api","end":""},{"old":"/api/v1/admin/companies","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/companies","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/companies","type":0,"val":"companies","end":""}],
    types: placeholder as Registry['admin.companies.companies.index']['types'],
  },
  'admin.companies.companies.store': {
    methods: ["POST"],
    pattern: '/api/v1/admin/companies',
    tokens: [{"old":"/api/v1/admin/companies","type":0,"val":"api","end":""},{"old":"/api/v1/admin/companies","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/companies","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/companies","type":0,"val":"companies","end":""}],
    types: placeholder as Registry['admin.companies.companies.store']['types'],
  },
  'admin.companies.companies.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/companies/:id',
    tokens: [{"old":"/api/v1/admin/companies/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"companies","end":""},{"old":"/api/v1/admin/companies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.companies.companies.show']['types'],
  },
  'admin.companies.companies.update': {
    methods: ["PUT"],
    pattern: '/api/v1/admin/companies/:id',
    tokens: [{"old":"/api/v1/admin/companies/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"companies","end":""},{"old":"/api/v1/admin/companies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.companies.companies.update']['types'],
  },
  'admin.companies.companies.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/admin/companies/:id',
    tokens: [{"old":"/api/v1/admin/companies/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/companies/:id","type":0,"val":"companies","end":""},{"old":"/api/v1/admin/companies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.companies.companies.destroy']['types'],
  },
  'users.users.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users',
    tokens: [{"old":"/api/v1/users","type":0,"val":"api","end":""},{"old":"/api/v1/users","type":0,"val":"v1","end":""},{"old":"/api/v1/users","type":0,"val":"users","end":""}],
    types: placeholder as Registry['users.users.index']['types'],
  },
  'users.users.store': {
    methods: ["POST"],
    pattern: '/api/v1/users',
    tokens: [{"old":"/api/v1/users","type":0,"val":"api","end":""},{"old":"/api/v1/users","type":0,"val":"v1","end":""},{"old":"/api/v1/users","type":0,"val":"users","end":""}],
    types: placeholder as Registry['users.users.store']['types'],
  },
  'users.users.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/users/:id',
    tokens: [{"old":"/api/v1/users/:id","type":0,"val":"api","end":""},{"old":"/api/v1/users/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/users/:id","type":0,"val":"users","end":""},{"old":"/api/v1/users/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['users.users.show']['types'],
  },
  'users.users.update': {
    methods: ["PUT"],
    pattern: '/api/v1/users/:id',
    tokens: [{"old":"/api/v1/users/:id","type":0,"val":"api","end":""},{"old":"/api/v1/users/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/users/:id","type":0,"val":"users","end":""},{"old":"/api/v1/users/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['users.users.update']['types'],
  },
  'users.users.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/users/:id',
    tokens: [{"old":"/api/v1/users/:id","type":0,"val":"api","end":""},{"old":"/api/v1/users/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/users/:id","type":0,"val":"users","end":""},{"old":"/api/v1/users/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['users.users.destroy']['types'],
  },
  'contacts.contacts.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/contacts',
    tokens: [{"old":"/api/v1/contacts","type":0,"val":"api","end":""},{"old":"/api/v1/contacts","type":0,"val":"v1","end":""},{"old":"/api/v1/contacts","type":0,"val":"contacts","end":""}],
    types: placeholder as Registry['contacts.contacts.index']['types'],
  },
  'contacts.contacts.store': {
    methods: ["POST"],
    pattern: '/api/v1/contacts',
    tokens: [{"old":"/api/v1/contacts","type":0,"val":"api","end":""},{"old":"/api/v1/contacts","type":0,"val":"v1","end":""},{"old":"/api/v1/contacts","type":0,"val":"contacts","end":""}],
    types: placeholder as Registry['contacts.contacts.store']['types'],
  },
  'contacts.contacts.import': {
    methods: ["POST"],
    pattern: '/api/v1/contacts/import',
    tokens: [{"old":"/api/v1/contacts/import","type":0,"val":"api","end":""},{"old":"/api/v1/contacts/import","type":0,"val":"v1","end":""},{"old":"/api/v1/contacts/import","type":0,"val":"contacts","end":""},{"old":"/api/v1/contacts/import","type":0,"val":"import","end":""}],
    types: placeholder as Registry['contacts.contacts.import']['types'],
  },
  'contacts.contacts.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/contacts/:id',
    tokens: [{"old":"/api/v1/contacts/:id","type":0,"val":"api","end":""},{"old":"/api/v1/contacts/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/contacts/:id","type":0,"val":"contacts","end":""},{"old":"/api/v1/contacts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['contacts.contacts.show']['types'],
  },
  'contacts.contacts.update': {
    methods: ["PUT"],
    pattern: '/api/v1/contacts/:id',
    tokens: [{"old":"/api/v1/contacts/:id","type":0,"val":"api","end":""},{"old":"/api/v1/contacts/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/contacts/:id","type":0,"val":"contacts","end":""},{"old":"/api/v1/contacts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['contacts.contacts.update']['types'],
  },
  'contacts.contacts.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/contacts/:id',
    tokens: [{"old":"/api/v1/contacts/:id","type":0,"val":"api","end":""},{"old":"/api/v1/contacts/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/contacts/:id","type":0,"val":"contacts","end":""},{"old":"/api/v1/contacts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['contacts.contacts.destroy']['types'],
  },
  'contactLists.contact_lists.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/contact-lists',
    tokens: [{"old":"/api/v1/contact-lists","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists","type":0,"val":"contact-lists","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.index']['types'],
  },
  'contactLists.contact_lists.store': {
    methods: ["POST"],
    pattern: '/api/v1/contact-lists',
    tokens: [{"old":"/api/v1/contact-lists","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists","type":0,"val":"contact-lists","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.store']['types'],
  },
  'contactLists.contact_lists.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/contact-lists/:id',
    tokens: [{"old":"/api/v1/contact-lists/:id","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists/:id","type":0,"val":"contact-lists","end":""},{"old":"/api/v1/contact-lists/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.show']['types'],
  },
  'contactLists.contact_lists.update': {
    methods: ["PUT"],
    pattern: '/api/v1/contact-lists/:id',
    tokens: [{"old":"/api/v1/contact-lists/:id","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists/:id","type":0,"val":"contact-lists","end":""},{"old":"/api/v1/contact-lists/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.update']['types'],
  },
  'contactLists.contact_lists.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/contact-lists/:id',
    tokens: [{"old":"/api/v1/contact-lists/:id","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists/:id","type":0,"val":"contact-lists","end":""},{"old":"/api/v1/contact-lists/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.destroy']['types'],
  },
  'contactLists.contact_lists.attach_contacts': {
    methods: ["POST"],
    pattern: '/api/v1/contact-lists/:id/contacts',
    tokens: [{"old":"/api/v1/contact-lists/:id/contacts","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists/:id/contacts","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists/:id/contacts","type":0,"val":"contact-lists","end":""},{"old":"/api/v1/contact-lists/:id/contacts","type":1,"val":"id","end":""},{"old":"/api/v1/contact-lists/:id/contacts","type":0,"val":"contacts","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.attach_contacts']['types'],
  },
  'contactLists.contact_lists.detach_contact': {
    methods: ["DELETE"],
    pattern: '/api/v1/contact-lists/:id/contacts/:contactId',
    tokens: [{"old":"/api/v1/contact-lists/:id/contacts/:contactId","type":0,"val":"api","end":""},{"old":"/api/v1/contact-lists/:id/contacts/:contactId","type":0,"val":"v1","end":""},{"old":"/api/v1/contact-lists/:id/contacts/:contactId","type":0,"val":"contact-lists","end":""},{"old":"/api/v1/contact-lists/:id/contacts/:contactId","type":1,"val":"id","end":""},{"old":"/api/v1/contact-lists/:id/contacts/:contactId","type":0,"val":"contacts","end":""},{"old":"/api/v1/contact-lists/:id/contacts/:contactId","type":1,"val":"contactId","end":""}],
    types: placeholder as Registry['contactLists.contact_lists.detach_contact']['types'],
  },
  'campaigns.campaigns.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campaigns',
    tokens: [{"old":"/api/v1/campaigns","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns","type":0,"val":"campaigns","end":""}],
    types: placeholder as Registry['campaigns.campaigns.index']['types'],
  },
  'campaigns.campaigns.store': {
    methods: ["POST"],
    pattern: '/api/v1/campaigns',
    tokens: [{"old":"/api/v1/campaigns","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns","type":0,"val":"campaigns","end":""}],
    types: placeholder as Registry['campaigns.campaigns.store']['types'],
  },
  'campaigns.campaigns.statuses': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campaigns/contact-statuses',
    tokens: [{"old":"/api/v1/campaigns/contact-statuses","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/contact-statuses","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/contact-statuses","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/contact-statuses","type":0,"val":"contact-statuses","end":""}],
    types: placeholder as Registry['campaigns.campaigns.statuses']['types'],
  },
  'campaigns.campaigns.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campaigns/:id',
    tokens: [{"old":"/api/v1/campaigns/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campaigns.campaigns.show']['types'],
  },
  'campaigns.campaigns.update': {
    methods: ["PUT"],
    pattern: '/api/v1/campaigns/:id',
    tokens: [{"old":"/api/v1/campaigns/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campaigns.campaigns.update']['types'],
  },
  'campaigns.campaigns.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/campaigns/:id',
    tokens: [{"old":"/api/v1/campaigns/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campaigns.campaigns.destroy']['types'],
  },
  'campaigns.campaigns.contacts': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campaigns/:id/contacts',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts","type":0,"val":"contacts","end":""}],
    types: placeholder as Registry['campaigns.campaigns.contacts']['types'],
  },
  'campaigns.campaigns.contact_status': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/status',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"contacts","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":1,"val":"contactId","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"status","end":""}],
    types: placeholder as Registry['campaigns.campaigns.contact_status']['types'],
  },
  'campaigns.campaigns.update_contact_status': {
    methods: ["PUT"],
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/status',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"contacts","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":1,"val":"contactId","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/status","type":0,"val":"status","end":""}],
    types: placeholder as Registry['campaigns.campaigns.update_contact_status']['types'],
  },
  'campaigns.campaigns.notes': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"contacts","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":1,"val":"contactId","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"notes","end":""}],
    types: placeholder as Registry['campaigns.campaigns.notes']['types'],
  },
  'campaigns.campaigns.store_note': {
    methods: ["POST"],
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"contacts","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":1,"val":"contactId","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes","type":0,"val":"notes","end":""}],
    types: placeholder as Registry['campaigns.campaigns.store_note']['types'],
  },
  'campaigns.campaigns.update_note': {
    methods: ["PUT"],
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"contacts","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":1,"val":"contactId","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"notes","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":1,"val":"noteId","end":""}],
    types: placeholder as Registry['campaigns.campaigns.update_note']['types'],
  },
  'campaigns.campaigns.destroy_note': {
    methods: ["DELETE"],
    pattern: '/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId',
    tokens: [{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"api","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"v1","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"campaigns","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":1,"val":"id","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"contacts","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":1,"val":"contactId","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":0,"val":"notes","end":""},{"old":"/api/v1/campaigns/:id/contacts/:contactId/notes/:noteId","type":1,"val":"noteId","end":""}],
    types: placeholder as Registry['campaigns.campaigns.destroy_note']['types'],
  },
  'teams.teams.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/teams',
    tokens: [{"old":"/api/v1/teams","type":0,"val":"api","end":""},{"old":"/api/v1/teams","type":0,"val":"v1","end":""},{"old":"/api/v1/teams","type":0,"val":"teams","end":""}],
    types: placeholder as Registry['teams.teams.index']['types'],
  },
  'teams.teams.store': {
    methods: ["POST"],
    pattern: '/api/v1/teams',
    tokens: [{"old":"/api/v1/teams","type":0,"val":"api","end":""},{"old":"/api/v1/teams","type":0,"val":"v1","end":""},{"old":"/api/v1/teams","type":0,"val":"teams","end":""}],
    types: placeholder as Registry['teams.teams.store']['types'],
  },
  'teams.teams.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/teams/:id',
    tokens: [{"old":"/api/v1/teams/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teams/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teams/:id","type":0,"val":"teams","end":""},{"old":"/api/v1/teams/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teams.teams.show']['types'],
  },
  'teams.teams.update': {
    methods: ["PUT"],
    pattern: '/api/v1/teams/:id',
    tokens: [{"old":"/api/v1/teams/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teams/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teams/:id","type":0,"val":"teams","end":""},{"old":"/api/v1/teams/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teams.teams.update']['types'],
  },
  'teams.teams.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/teams/:id',
    tokens: [{"old":"/api/v1/teams/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teams/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teams/:id","type":0,"val":"teams","end":""},{"old":"/api/v1/teams/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teams.teams.destroy']['types'],
  },
  'teams.teams.assign_users': {
    methods: ["POST"],
    pattern: '/api/v1/teams/:id/users',
    tokens: [{"old":"/api/v1/teams/:id/users","type":0,"val":"api","end":""},{"old":"/api/v1/teams/:id/users","type":0,"val":"v1","end":""},{"old":"/api/v1/teams/:id/users","type":0,"val":"teams","end":""},{"old":"/api/v1/teams/:id/users","type":1,"val":"id","end":""},{"old":"/api/v1/teams/:id/users","type":0,"val":"users","end":""}],
    types: placeholder as Registry['teams.teams.assign_users']['types'],
  },
  'teams.teams.detach_user': {
    methods: ["DELETE"],
    pattern: '/api/v1/teams/:id/users/:userId',
    tokens: [{"old":"/api/v1/teams/:id/users/:userId","type":0,"val":"api","end":""},{"old":"/api/v1/teams/:id/users/:userId","type":0,"val":"v1","end":""},{"old":"/api/v1/teams/:id/users/:userId","type":0,"val":"teams","end":""},{"old":"/api/v1/teams/:id/users/:userId","type":1,"val":"id","end":""},{"old":"/api/v1/teams/:id/users/:userId","type":0,"val":"users","end":""},{"old":"/api/v1/teams/:id/users/:userId","type":1,"val":"userId","end":""}],
    types: placeholder as Registry['teams.teams.detach_user']['types'],
  },
  'tasks.tasks.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/tasks',
    tokens: [{"old":"/api/v1/tasks","type":0,"val":"api","end":""},{"old":"/api/v1/tasks","type":0,"val":"v1","end":""},{"old":"/api/v1/tasks","type":0,"val":"tasks","end":""}],
    types: placeholder as Registry['tasks.tasks.index']['types'],
  },
  'tasks.tasks.store': {
    methods: ["POST"],
    pattern: '/api/v1/tasks',
    tokens: [{"old":"/api/v1/tasks","type":0,"val":"api","end":""},{"old":"/api/v1/tasks","type":0,"val":"v1","end":""},{"old":"/api/v1/tasks","type":0,"val":"tasks","end":""}],
    types: placeholder as Registry['tasks.tasks.store']['types'],
  },
  'tasks.tasks.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/tasks/:id',
    tokens: [{"old":"/api/v1/tasks/:id","type":0,"val":"api","end":""},{"old":"/api/v1/tasks/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/tasks/:id","type":0,"val":"tasks","end":""},{"old":"/api/v1/tasks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['tasks.tasks.show']['types'],
  },
  'tasks.tasks.update': {
    methods: ["PUT"],
    pattern: '/api/v1/tasks/:id',
    tokens: [{"old":"/api/v1/tasks/:id","type":0,"val":"api","end":""},{"old":"/api/v1/tasks/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/tasks/:id","type":0,"val":"tasks","end":""},{"old":"/api/v1/tasks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['tasks.tasks.update']['types'],
  },
  'tasks.tasks.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/tasks/:id',
    tokens: [{"old":"/api/v1/tasks/:id","type":0,"val":"api","end":""},{"old":"/api/v1/tasks/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/tasks/:id","type":0,"val":"tasks","end":""},{"old":"/api/v1/tasks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['tasks.tasks.destroy']['types'],
  },
  'whatsapp.webhook.whats_app.webhook_verify': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/whatsapp/webhook',
    tokens: [{"old":"/api/v1/whatsapp/webhook","type":0,"val":"api","end":""},{"old":"/api/v1/whatsapp/webhook","type":0,"val":"v1","end":""},{"old":"/api/v1/whatsapp/webhook","type":0,"val":"whatsapp","end":""},{"old":"/api/v1/whatsapp/webhook","type":0,"val":"webhook","end":""}],
    types: placeholder as Registry['whatsapp.webhook.whats_app.webhook_verify']['types'],
  },
  'whatsapp.webhook.whats_app.webhook_receive': {
    methods: ["POST"],
    pattern: '/api/v1/whatsapp/webhook',
    tokens: [{"old":"/api/v1/whatsapp/webhook","type":0,"val":"api","end":""},{"old":"/api/v1/whatsapp/webhook","type":0,"val":"v1","end":""},{"old":"/api/v1/whatsapp/webhook","type":0,"val":"whatsapp","end":""},{"old":"/api/v1/whatsapp/webhook","type":0,"val":"webhook","end":""}],
    types: placeholder as Registry['whatsapp.webhook.whats_app.webhook_receive']['types'],
  },
  'whatsapp.whats_app.templates': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/whatsapp/templates',
    tokens: [{"old":"/api/v1/whatsapp/templates","type":0,"val":"api","end":""},{"old":"/api/v1/whatsapp/templates","type":0,"val":"v1","end":""},{"old":"/api/v1/whatsapp/templates","type":0,"val":"whatsapp","end":""},{"old":"/api/v1/whatsapp/templates","type":0,"val":"templates","end":""}],
    types: placeholder as Registry['whatsapp.whats_app.templates']['types'],
  },
  'whatsapp.whats_app.send': {
    methods: ["POST"],
    pattern: '/api/v1/whatsapp/send',
    tokens: [{"old":"/api/v1/whatsapp/send","type":0,"val":"api","end":""},{"old":"/api/v1/whatsapp/send","type":0,"val":"v1","end":""},{"old":"/api/v1/whatsapp/send","type":0,"val":"whatsapp","end":""},{"old":"/api/v1/whatsapp/send","type":0,"val":"send","end":""}],
    types: placeholder as Registry['whatsapp.whats_app.send']['types'],
  },
  'whatsapp.whats_app.send_template': {
    methods: ["POST"],
    pattern: '/api/v1/whatsapp/send-template',
    tokens: [{"old":"/api/v1/whatsapp/send-template","type":0,"val":"api","end":""},{"old":"/api/v1/whatsapp/send-template","type":0,"val":"v1","end":""},{"old":"/api/v1/whatsapp/send-template","type":0,"val":"whatsapp","end":""},{"old":"/api/v1/whatsapp/send-template","type":0,"val":"send-template","end":""}],
    types: placeholder as Registry['whatsapp.whats_app.send_template']['types'],
  },
  'whatsapp.whats_app.messages': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/whatsapp/messages',
    tokens: [{"old":"/api/v1/whatsapp/messages","type":0,"val":"api","end":""},{"old":"/api/v1/whatsapp/messages","type":0,"val":"v1","end":""},{"old":"/api/v1/whatsapp/messages","type":0,"val":"whatsapp","end":""},{"old":"/api/v1/whatsapp/messages","type":0,"val":"messages","end":""}],
    types: placeholder as Registry['whatsapp.whats_app.messages']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
