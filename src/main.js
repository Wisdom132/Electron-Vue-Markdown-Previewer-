import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import decode from '@/directives/decode'
// import VueDirectiveMarkdown from 'vue-directive-markdown';
// Vue.directive('decode', VueDirectiveMarkdown)


Vue.directive("decode", decode)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
