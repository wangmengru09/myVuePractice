import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers.js'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: routers
})
const whiteList = ['/login'] //免登录白名单，避免进入login页面死循环
router.beforeEach(function(to, from, next) {
  if (localStorage.getItem('token')) {
    console.log(routers)
    localStorage.setItem('Routers', JSON.stringify(routers))
    if (!localStorage.getItem('Routers')) {
    }
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
