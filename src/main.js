// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
// App component isn't required
import App from './App'
import Users from './components/Users'
import Test from './components/Test'

Vue.config.productionTip = false

// using vue resource
Vue.use(vueResource)
Vue.use(VueRouter)


const router = new VueRouter({
	// in hash mode a hash will be there in the url this is the default mode in routing
	// mode:'hash',
	// to get rid of hash use history mode
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Users},
		{path:'/test',component:Test},
	]
});
/* eslint-disable no-new */
// <router-link> is the component for enabling user navigation in a router-enabled app
new Vue({
  router,
  template: `
  <div id='app'>
  	<ul>
  		<li><router-link to='/'>Users</router-link></li>
  		<li><router-link to='/test'>Test</router-link></li>
  	</ul>
  	<router-view></router-view>
  </div>
  `
}).$mount('#app');
