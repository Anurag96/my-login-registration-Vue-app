import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import AboutMe from '@/components/AboutMe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe
    }
  ]
})
