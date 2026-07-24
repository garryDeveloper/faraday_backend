/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  admin: {
    companies: {
      companies: {
        index: typeof routes['admin.companies.companies.index']
        store: typeof routes['admin.companies.companies.store']
        show: typeof routes['admin.companies.companies.show']
        update: typeof routes['admin.companies.companies.update']
        destroy: typeof routes['admin.companies.companies.destroy']
      }
    }
  }
  users: {
    users: {
      index: typeof routes['users.users.index']
      store: typeof routes['users.users.store']
      show: typeof routes['users.users.show']
      update: typeof routes['users.users.update']
      destroy: typeof routes['users.users.destroy']
    }
  }
  contacts: {
    contacts: {
      index: typeof routes['contacts.contacts.index']
      store: typeof routes['contacts.contacts.store']
      import: typeof routes['contacts.contacts.import']
      show: typeof routes['contacts.contacts.show']
      update: typeof routes['contacts.contacts.update']
      destroy: typeof routes['contacts.contacts.destroy']
    }
  }
}
