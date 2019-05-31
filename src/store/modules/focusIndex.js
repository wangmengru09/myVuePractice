const state = {
  currentIndex: null,
  focusList: [],
  currentFocus: {},
  childrenIndex: 0
}
const getters = {
  focusIndex: state => state.currentIndex,
  focusItemList: state => state.focusList,
  currentFocus: state => state.currentFocus,
  childrenIndex: state => state.childrenIndex
}
const mutations = {
  SET_CURRENTINDEX(state, index) {
    state.currentIndex = index
  },
  PUSH_FOCUSITEM(state, item) {
    state.focusList.push(item)
  },
  CLEAR_FOCUSLIST(state, item) {
    state.focusList = []
  },
  SET_CHILDRENINDEX(state, index) {
    state.childrenIndex = index
  }
}
const actions = {
  SetCurrentIndex({ commit }, index) {
    // console.log('currentIndex:', index, state.focusList.length)
    while (index <= state.focusList.length - 1) {
      let focusOne = state.focusList[index]
      if (!state.focusList[index].binding.value.disabled) {
        state.currentFocus = state.focusList[index]
        if (focusOne.binding.value.type === 'checkbox') {
          focusOne.el.eq(state.childrenIndex).focus()
        } else if (focusOne.binding.value.type === 'select') {
          focusOne.el.children($('.el-input__inner')).eq(0).focus()
        } else {
          focusOne.el.eq(0).focus()
        }
        // else if (focusOne.binding.value.type === 'radio') {
        //   focusOne.el.eq(0).focus()
        // }
        commit('SET_CURRENTINDEX', index)
        return
      }
      index++
    }
  },
  PushFocusItem({ commit }, item) {
    commit('PUSH_FOCUSITEM', item)
  },
  ClearFocusList({ commit }) {
    commit('CLEAR_FOCUSLIST')
  },
  SetChildrenIndex({ commit }, index) {
    commit('SET_CHILDRENINDEX', index)
  }
}
const focusIndex = {
  state,
  getters,
  mutations,
  actions
}

export default focusIndex
