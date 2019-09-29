import Vue from "vue"

import QueryBuilder from "./components/QueryBuilder.vue"
import QueryPreview from "./components/QueryPreview.vue"

import { log, setVerbose } from "./help"
import { IQueryBuilderOptions } from "../types"

let installed = false
let privateVue: any

export default function install(vue: typeof Vue, options?: IQueryBuilderOptions) {
  if (installed && privateVue === vue) return
  Vue.component("CripQueryBuilder", QueryBuilder)
  Vue.component("CripQueryPreview", QueryPreview)
}

export { QueryBuilder, QueryPreview }
export { } from "./types"
