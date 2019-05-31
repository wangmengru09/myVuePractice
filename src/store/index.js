import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import sidebar from './modules/sidebar'
import focus from './modules/focusIndex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    sidebar,
    focus
  }
})