<template lang="pug">
#app-coap
  .display-3.text-center.font-weight-light.mb-12 CoAP
  v-card(
    color="#18aaf8"
    dark
  )
    v-card-text.white--text.intro
      a.white--text.font-weight-bold(
        href="https://coap.technology/"
        target="_new"
      )
        | CoAP
        v-icon.mx-1(small) mdi-open-in-new
      | is lightweight, built on UDP and resembles the HTTP protocol.
      | You can send requests to <b>endpoints</b> with different <b>methods</b>.
      | CoAP messages go trough the Telenor <b>IoT Gateway</b>, which forwards messages to Telenor Managed IoT Cloud (MIC).
      | Both non-confirmable and confirmable frames for reliable and acknowledgeable transfer is supported.
      br
      br
      | This is an alternative for devices that may not support a full TCP/IP stack or lack encryption capabilities.
      | Data is transported in a secure VPN to the IoT platform without exposing devices or data traffic to the internet.
      | Authentication towards the IoT platform is handled by the mobile network, eliminating this as a separate
      | process from the devices with X.509 certificates.

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
              kbd.ml-3 Separate VPN towards the IoT platform
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

  v-card.mt-6
    v-tabs(
      v-model="tab"
      background-color="secondary"
      dark
    )
      v-tab MicroPython
    v-tabs-items(v-model="tab")
      v-tab-item
        vue-code-highlight
          pre
            .
              import microcoapy

              def callback(self, packet, sender):
                print('Message received:', packet, ', from: ', sender)
                print('Mesage payload: ', packet.payload.decode('unicode_escape'))

              client = microcoapy.Coap()
              client.resposeCallback = callback
              client.start()

              client.post('172.16.32.1', 5683, '/request/uri', 'payload')
              client.poll(2000)
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'

export default {
  name: 'AppCoap',
  components: { VueCodeHighlight },
  data: () => ({
    tab: null
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
