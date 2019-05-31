// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store/index'
import ElementUI from 'element-ui'
import './directive/index'
import './assets/element-#1CC09F/index.css';
import './Mock/mock'
import 'babel-polyfill'
import 'splitpanes/dist/splitpanes.css'
import splitPane from 'vue-splitpane'
import $ from 'jquery'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    splitPane,
    App
  },
  template: '<App/>'
})
