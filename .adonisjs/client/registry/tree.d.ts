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
  contactLists: {
    contactLists: {
      index: typeof routes['contactLists.contact_lists.index']
      store: typeof routes['contactLists.contact_lists.store']
      show: typeof routes['contactLists.contact_lists.show']
      update: typeof routes['contactLists.contact_lists.update']
      destroy: typeof routes['contactLists.contact_lists.destroy']
      attachContacts: typeof routes['contactLists.contact_lists.attach_contacts']
      detachContact: typeof routes['contactLists.contact_lists.detach_contact']
    }
  }
  campaigns: {
    campaigns: {
      index: typeof routes['campaigns.campaigns.index']
      store: typeof routes['campaigns.campaigns.store']
      statuses: typeof routes['campaigns.campaigns.statuses']
      show: typeof routes['campaigns.campaigns.show']
      update: typeof routes['campaigns.campaigns.update']
      destroy: typeof routes['campaigns.campaigns.destroy']
      contacts: typeof routes['campaigns.campaigns.contacts']
      contactStatus: typeof routes['campaigns.campaigns.contact_status']
      updateContactStatus: typeof routes['campaigns.campaigns.update_contact_status']
      notes: typeof routes['campaigns.campaigns.notes']
      storeNote: typeof routes['campaigns.campaigns.store_note']
      updateNote: typeof routes['campaigns.campaigns.update_note']
      destroyNote: typeof routes['campaigns.campaigns.destroy_note']
    }
  }
  teams: {
    teams: {
      index: typeof routes['teams.teams.index']
      store: typeof routes['teams.teams.store']
      show: typeof routes['teams.teams.show']
      update: typeof routes['teams.teams.update']
      destroy: typeof routes['teams.teams.destroy']
      assignUsers: typeof routes['teams.teams.assign_users']
      detachUser: typeof routes['teams.teams.detach_user']
    }
  }
  tasks: {
    tasks: {
      index: typeof routes['tasks.tasks.index']
      store: typeof routes['tasks.tasks.store']
      show: typeof routes['tasks.tasks.show']
      update: typeof routes['tasks.tasks.update']
      destroy: typeof routes['tasks.tasks.destroy']
    }
  }
  whatsapp: {
    webhook: {
      whatsApp: {
        webhookVerify: typeof routes['whatsapp.webhook.whats_app.webhook_verify']
        webhookReceive: typeof routes['whatsapp.webhook.whats_app.webhook_receive']
      }
    }
    whatsApp: {
      templates: typeof routes['whatsapp.whats_app.templates']
      send: typeof routes['whatsapp.whats_app.send']
      sendTemplate: typeof routes['whatsapp.whats_app.send_template']
      messages: typeof routes['whatsapp.whats_app.messages']
    }
  }
}
