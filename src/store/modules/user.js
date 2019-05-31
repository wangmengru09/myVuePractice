const state = {
  token: localStorage.getItem('token')
}
const getters = {
  user: state => state.token
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
}

const actions = {
  GetToken({commit}, token) {
    commit('SET_TOKEN', token);
  }
}

const user = {
  state,
  getters,
  mutations,
  actions
}

export default user
