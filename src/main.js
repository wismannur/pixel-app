import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: h => h(App)
}).$mount('#app')
