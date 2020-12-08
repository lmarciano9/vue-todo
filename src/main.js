import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './i18n/ml'

import '@mdi/font/css/materialdesignicons.css'
import './styles/global.scss'

import Buefy from 'buefy'
Vue.use(Buefy)

Vue.config.productionTip = false

store.dispatch('getAuth')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
