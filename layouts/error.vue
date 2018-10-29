<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="page-intro" >Page not found</h1>
    <h1 v-else class="page-intro" >An error occurred</h1>
    <nuxt-link to="/">Return to Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'blog' // you can set a custom layout for the error page
}
</script>