<template lang="pug">
v-app
  app-header(v-if="showHeader")
  v-content
    router-view
</template>

<script>
import { AppHeader } from '@/components'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data: () => ({
    showHeader: true
  }),
  mounted () {
    this.showHeader = !this.$route.query.hasOwnProperty('noheader')
  }
}
</script>

<style lang="stylus" scoped>
.v-application
  .v-content
    background #f9f9f9
    border-top 1px solid #e0e0e0
</style>
