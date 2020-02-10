<template lang="pug">
#app-intro
  v-card(color="amber")
    v-card-text.text-center
      | Telenor Managed IoT Cloud (MIC) supports two data transport protocols
      | which must be implemented by IoT devices.
      | Transport protocols are connectivity agnostic, although we do not recomment using NB-IoT with MQTT.
</template>

<script>
export default {
  name: 'AppIntro',
  data: () => ({
    //
  })
}
</script>

<style lang="stylus" scoped>
</style>
