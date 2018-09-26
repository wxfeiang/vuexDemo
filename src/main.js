import Vue from 'vue'
import App from './App.vue'
// 引入vuex store
import {store} from './store/store'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
