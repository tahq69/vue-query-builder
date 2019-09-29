import Vue from "vue"

import { QueryBuilder, QueryPreview } from "@/main"
import App from "./components/Docs.vue"

Vue.component("CripQueryBuilder", QueryBuilder)
Vue.component("CripQueryPreview", QueryPreview)

import router from "./router"

const app = new Vue({
  render: h => h(App),
  router,
})

app.$mount(document.getElementById("app") || undefined)
