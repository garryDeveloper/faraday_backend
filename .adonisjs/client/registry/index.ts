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
