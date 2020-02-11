import Vue from 'vue'
import router from '@/router'
import store from '@/store'

// Styles
import 'vue-code-highlight/themes/prism.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/styles/global.styl'

// Libraries
import vuetify from '@/lib/vuetify'

// Services
import '@/service/RegisterServiceWorker'

// Misc.
import App from '@/App'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
