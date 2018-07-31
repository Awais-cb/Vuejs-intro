// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false

// using vue resource
Vue.use(vueResource)
Vue.use(VueRouter)


const router = new VueRouter{
	mode:'history'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
