<script lang="ts">
import Vue from "vue"

import CodeSample from "./CodeSample.vue"
import ExampleSection from "./ExampleSection.vue"

export default Vue.extend({
  name: "Configurations",

  components: { ExampleSection, CodeSample },

  methods: {
  },
})
</script>

<template>
  <example-section title="Configurations">

    <p>Some configurations are available only in component registration, but any design specific settings
      may be added in runtime and changed any time. More details in sample below.</p>

    
    <code-sample>
      TODO: Configuration sample
    </code-sample>
  </example-section>
</template>
