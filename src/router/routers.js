import index from '../views/index/index.vue'

const routers = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '/tables',
        component: (resolve) => require(['@/views/tables/index.vue'], resolve)
      },
      {
        path: '/list',
        component: (resolve) => require(['@/views/list/index.vue'], resolve)
      }
    ]
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

export default routers