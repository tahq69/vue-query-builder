import Vue from "vue"

import { log, setVerbose } from "./help"
import { } from "./types"

let installed = false
let privateVue: any

export default function install(vue: typeof Vue, options?: any) {
  if (installed && privateVue === vue) return

}

export { } from "./types"
