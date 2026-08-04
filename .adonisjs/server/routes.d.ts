import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.index': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.store': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.companies.companies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.companies.companies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.index': { paramsTuple?: []; params?: {} }
    'users.users.store': { paramsTuple?: []; params?: {} }
    'users.users.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.index': { paramsTuple?: []; params?: {} }
    'contacts.contacts.store': { paramsTuple?: []; params?: {} }
    'contacts.contacts.import': { paramsTuple?: []; params?: {} }
    'contacts.contacts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.index': { paramsTuple?: []; params?: {} }
    'contactLists.contact_lists.store': { paramsTuple?: []; params?: {} }
    'contactLists.contact_lists.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.attach_contacts': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.detach_contact': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.index': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.store': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.statuses': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.contacts': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.contact_status': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.update_contact_status': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.notes': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.store_note': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.update_note': { paramsTuple: [ParamValue,ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue,'noteId': ParamValue} }
    'campaigns.campaigns.destroy_note': { paramsTuple: [ParamValue,ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue,'noteId': ParamValue} }
    'teams.teams.index': { paramsTuple?: []; params?: {} }
    'teams.teams.store': { paramsTuple?: []; params?: {} }
    'teams.teams.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teams.teams.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teams.teams.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teams.teams.assign_users': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teams.teams.detach_user': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'userId': ParamValue} }
    'tasks.tasks.index': { paramsTuple?: []; params?: {} }
    'tasks.tasks.store': { paramsTuple?: []; params?: {} }
    'tasks.tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.tasks.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.tasks.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'whatsapp.webhook.whats_app.webhook_verify': { paramsTuple?: []; params?: {} }
    'whatsapp.webhook.whats_app.webhook_receive': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.templates': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.send': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.send_template': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.messages': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.index': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.index': { paramsTuple?: []; params?: {} }
    'users.users.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.index': { paramsTuple?: []; params?: {} }
    'contacts.contacts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.index': { paramsTuple?: []; params?: {} }
    'contactLists.contact_lists.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.index': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.statuses': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.contacts': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.contact_status': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.notes': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'teams.teams.index': { paramsTuple?: []; params?: {} }
    'teams.teams.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.tasks.index': { paramsTuple?: []; params?: {} }
    'tasks.tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'whatsapp.webhook.whats_app.webhook_verify': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.templates': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.messages': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.index': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.index': { paramsTuple?: []; params?: {} }
    'users.users.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.index': { paramsTuple?: []; params?: {} }
    'contacts.contacts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.index': { paramsTuple?: []; params?: {} }
    'contactLists.contact_lists.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.index': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.statuses': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.contacts': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.contact_status': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.notes': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'teams.teams.index': { paramsTuple?: []; params?: {} }
    'teams.teams.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.tasks.index': { paramsTuple?: []; params?: {} }
    'tasks.tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'whatsapp.webhook.whats_app.webhook_verify': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.templates': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.messages': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.store': { paramsTuple?: []; params?: {} }
    'users.users.store': { paramsTuple?: []; params?: {} }
    'contacts.contacts.store': { paramsTuple?: []; params?: {} }
    'contacts.contacts.import': { paramsTuple?: []; params?: {} }
    'contactLists.contact_lists.store': { paramsTuple?: []; params?: {} }
    'contactLists.contact_lists.attach_contacts': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.store': { paramsTuple?: []; params?: {} }
    'campaigns.campaigns.store_note': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'teams.teams.store': { paramsTuple?: []; params?: {} }
    'teams.teams.assign_users': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.tasks.store': { paramsTuple?: []; params?: {} }
    'whatsapp.webhook.whats_app.webhook_receive': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.send': { paramsTuple?: []; params?: {} }
    'whatsapp.whats_app.send_template': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'admin.companies.companies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.update_contact_status': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.update_note': { paramsTuple: [ParamValue,ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue,'noteId': ParamValue} }
    'teams.teams.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.tasks.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'admin.companies.companies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users.users.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contacts.contacts.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'contactLists.contact_lists.detach_contact': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue} }
    'campaigns.campaigns.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campaigns.campaigns.destroy_note': { paramsTuple: [ParamValue,ParamValue,ParamValue]; params: {'id': ParamValue,'contactId': ParamValue,'noteId': ParamValue} }
    'teams.teams.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teams.teams.detach_user': { paramsTuple: [ParamValue,ParamValue]; params: {'id': ParamValue,'userId': ParamValue} }
    'tasks.tasks.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}