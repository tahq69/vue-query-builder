<script lang="ts">
import Vue from "vue"

import CodeSample from "./CodeSample.vue"
import ExampleSection from "./ExampleSection.vue"

export default Vue.extend({
  name: "DefaultUsage",

  components: { ExampleSection, CodeSample },

  methods: {},
})
</script>

<template>
  <example-section title="Default usage">
    <CripQueryBuilder></CripQueryBuilder>

    <code-sample>TODO: default usage sample</code-sample>
  </example-section>
</template>
