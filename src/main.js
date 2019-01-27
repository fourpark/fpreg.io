import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BSVue from 'bootstrap-vue'

import store from './data/store.json'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(BSVue)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')