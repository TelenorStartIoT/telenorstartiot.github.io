<template lang="pug">
#app-coap
  .display-3.text-center.font-weight-light.mb-12 CoAP
  v-card(
    color="#18aaf8"
    dark
  )
    v-card-text.white--text.intro
      a.white--text.font-weight-bold(
        href="#"
        target="_new"
      )
        | CoAP
        v-icon.mx-1(small) mdi-open-in-new
      | is lightweight, built on UDP and resembles the HTTP protocol.
      | You can send requests to <b>endpoints</b> with different <b>methods</b>.
      | CoAP messages go trough the Telenor <b>IoT Gateway</b>, which forwards messages to Telenor Managed IoT Cloud (MIC).
      br
      br
      | This is an alternative for devices that may not support a full TCP/IP stack or lack encryption capabilities.
      | Security is achieved by tunneling traffic through a private APN with RADIUS authentication.

      v-divider.my-6

      v-img.my-6(
        :src="require('../assets/coap.svg')"
        width="60%"
        contain
      )

  v-card
    v-simple-table.mt-6
      template(v-slot:default)
        thead
          tr
            th.text-left Configuration
            th.text-left Value
        tbody
          tr
            td APN
            td
              b telenor.iotgw
          tr
            td IP
            td
              b 172.16.32.1
          tr
            td Port
            td
              b 5683
          tr
            td Endpoint
            td
              b /request/uri
          tr
            td Method
            td
              b POST
</template>

<script>
export default {
  name: 'AppCoap',
  data: () => ({
    //
  })
}
</script>

<style lang="stylus" scoped>
#app-coap
  .intro
    a
      .v-icon
        opacity 1 !important

    b
      font-weight normal
      text-decoration underline dotted

    .v-image
      margin 0 auto
      height 147px
</style>
