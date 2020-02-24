<template lang="pug">
#app-header
  .d-flex.justify-center
    a(href="https://startiot.telenor.com/")
      img.my-6(
        :src="require('../assets/telenor-logo-flat-blue.svg')"
        width="75"
      )
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    //
  })
}
</script>

<style lang="stylus" scoped>
#app-header
  .v-image__image
    width 100px
</style>
