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
    }
  ]
})
export default routes
