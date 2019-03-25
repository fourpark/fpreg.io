import Vue from 'vue'
import App from './App.vue'

import store from './data/store.json'
import json0 from './data/collections/0.json'
import json1 from './data/collections/1.json'
import json2 from './data/collections/2.json'
import json3 from './data/collections/3.json'
import json4 from './data/collections/4.json'

store.collections.push(json0,json1,json2,json3,json4)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')