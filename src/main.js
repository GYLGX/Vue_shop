import Vue from 'vue'
import App from './App.vue'
import router from './router'

//导入element-ui
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')