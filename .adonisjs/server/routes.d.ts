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
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.index': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.index': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'admin.companies.companies.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'admin.companies.companies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'admin.companies.companies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}