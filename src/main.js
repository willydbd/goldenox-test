import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter)
//define all components routes
const routes = [
  { path: '/', component:  require('./components/Countries.vue').default },

  { path: '/country/:name', component:  require('./components/Country.vue').default },
]

const router = new VueRouter({
  mode: 'history',
  routes 
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
