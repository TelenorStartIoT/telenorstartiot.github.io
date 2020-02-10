<template lang="pug">
#app-mqtt
  .display-3.text-center.font-weight-light.mb-12 MQTT
  v-card(
    color="#18aaf8"
    dark
  )
    v-card-text.white--text.intro
      a.white--text.font-weight-bold(
        href="http://mqtt.org/"
        target="_new"
      )
        | MQTT
        v-icon.mx-1(small) mdi-open-in-new
      | is a many-to-many messaging protocol widely used by IoT devices.
      | You can <b>publish</b> messages to <b>topics</b> which then clients can <b>subscribe</b> to.
      | The MQTT broker is based on &nbsp;
      a.white--text.font-weight-bold(
        href="https://aws.amazon.com/iot/"
        target="_new"
      )
        | AWS IoT
        v-icon.mx-1(small) mdi-open-in-new
      | and you can make full use of 
      a.white--text.font-weight-bold(
        href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html"
        target="_new"
      )
        | device shadows
        v-icon.mx-1(small) mdi-open-in-new
      | .
      br
      br
      | Since data is transferred over the open internet,
      | security is achieved by encrypting traffic using 
      a.white--text.font-weight-bold(
        href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html"
        target="_new"
      )
        | X.509 client certificates
        v-icon.mx-1(small) mdi-open-in-new
      | or 
      a.white--text.font-weight-bold(
        href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"
        target="_new"
      )
        | AWS Signature Version 4
        v-icon.mx-1(small) mdi-open-in-new
      | . Different MQTT topic structures apply based on the chosen encryption method.

      v-divider.my-6

      v-img.my-6(
        :src="require('../assets/mqtt.svg')"
        width="60%"
        contain
      )

  v-card.mt-6
    v-simple-table
      template(v-slot:default)
        thead
          tr
            th.text-left Configuration
            th.text-left Value
        tbody
          tr
            td APN
            td
              b telenor.iot
          tr
            td Host
            td
              b a15nxxwvsld4o-ats.iot.eu-west-1.amazonaws.com
          tr
            td Port
            td
              b 8883
          tr
            td
            td
          tr
            td
            td
</template>

<script>
export default {
  name: 'AppMqtt',
  data: () => ({
    // 
  })
}
</script>

<style lang="stylus" scoped>
#app-mqtt
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
