<template lang="pug">
#app-header
  .d-flex.justify-center
    img.my-6(
      :src="require('../assets/startiot-black.svg')"
      width="200"
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
