import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/index.vue'

Vue.use(Router)
const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../views/login/login.vue'], resolve)
    },
    {
      path: '/404',
      name: '404',
      component: (resolve) => require(['../views/error/index.vue'], resolve)
    }
  ]
})
export default routes
