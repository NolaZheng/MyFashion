import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vue2Filters from 'vue2-filters'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify';

Vue.use(Vue2Filters)
Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://my-fashion-2dcd0.firebaseio.com/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
