const state = {
  defaultActiveIndex: localStorage.getItem('defaultActiveIndex')
}

const getters = {
  sidebar: state => state
}

const mutations = {
  SET_DefaultActiveIndex: (state, defaultActiveIndex) => {
    state.defaultActiveIndex = defaultActiveIndex;
  }
}

const actions = {
  GetDefaultActiveIndex({commit}, token) {
    commit("SET_DefaultActiveIndex", token)
  }
}

const sidebar = {
  state,
  mutations,
  actions,
  getters
}