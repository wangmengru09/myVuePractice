import index from '../views/index/index.vue'

const routers = [
  {
    path: '/login',
    meta: { hidden: true },
    component: (resolve) => require(['../views/login/login.vue'], resolve)
  },
  {
    path: '/404',
    meta: { hidden: true },
    component: (resolve) => require(['../views/error/index.vue'], resolve)
  },
  {
    path: '/',
    meta: { hidden: false, title: '系统一' },
    component: index,
    redirect: '/tables',
    children: [
      {
        path: '/tables', meta: { title: '表格', hidden: false, name: '1' },
        component: (resolve) => require(['@/views/tables/index.vue'], resolve)
      },
      {
        path: '/list', meta: { title: '列表', hidden: false, name: '2' },
        component: (resolve) => require(['@/views/list/index.vue'], resolve)
      },
      {
        path: '/form', meta: { title: '表单', hidden: false, name: '3' },
        component: (resolve) => require(['@/views/form/index.vue'], resolve)
      },
      {
        path: '/radio', meta: { title: '单选框', hidden: false, name: '4' },
        component: (resolve) => require(['@/views/radios/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/system2',
    meta: {hidden: false, title: '系统二'},
    component: index,
    redirect: '/system2/print',
    children: [
      {
        path: '/system2/print', meta: { title: '打印', hidden: false, name: '3' },
        component: (resolve) => require(['@/views/print/index.vue'], resolve)
      },
      {
        path: '/system2/lodopPrint', meta: { title: 'Lodop打印', hidden: false, name: '4' },
        component: (resolve) => require(['@/views/print/lodopPrint.vue/index.vue'], resolve)
      }
    ]
  }
]

export default routers