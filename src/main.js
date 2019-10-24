import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/style.css'
import '@/assets/flatIcon/flaticon.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
