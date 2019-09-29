import Vue from "vue"
import { ExtendedVue } from "vue/types/vue"

import { Plugin } from "./plugin"

type QueryBuilder = ExtendedVue<Vue, {}, {}, {}, Record<"", any>>
type QueryPreview = ExtendedVue<Vue, {}, {}, {}, Record<"", any>>
// type QueryPreview = ExtendedVue<Vue, Data, Methods, Computed, Record<PropNames, any>>

export default Plugin

export { IQueryBuilderOptions } from "./plugin"
