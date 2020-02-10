<template lang="pug">
v-container
  v-row
    v-col.mb-12(cols="12")
      app-intro
    v-col(
      cols="12"
      md="6"
    )
      app-mqtt
    v-col(
      cols="12"
      md="6"
    )
      app-coap
</template>

<script>
import {
  AppIntro,
  AppMqtt,
  AppCoap
} from '@/components'

export default {
  name: 'Home',
  components: {
    AppIntro,
    AppMqtt,
    AppCoap
  }
}
</script>

<style lang="stylus" scoped>
</style>
