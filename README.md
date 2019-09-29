# crip-vue-query-builder

> A Vue.js project to create advanced filter for user to execute complex queries.
For more details read [documentation with examples](http://rawgit.com/tahq69/vue-query-builder/master/index.html)

## Usage

### Install

```bash
> npm i -S crip-vue-query-builder
```

### Setup

```javascript
import Vue from "vue"
import { QueryBuilder, QueryPreview } from "crip-vue-query-builder"
import axios from "axios"

// Register component to be able use in your own components.
Vue.component(QueryBuilder.name, QueryBuilder)
Vue.component(QueryPreview.name, QueryPreview)
```

### Display query builder

```html
// App.vue
<template>
  <div class="container">

    <div class="row">
      <QueryBuilder></QueryBuilder>
    </div>

  </div>
</template>
```

## Build Setup

```bash
# install dependencies and serve with hot reload at localhost:8080
> npm i && npm run dev
```

## Release steps

```bash
> npm run release
```
