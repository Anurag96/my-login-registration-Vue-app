import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Login from './components/Login'
import Registration from './components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
