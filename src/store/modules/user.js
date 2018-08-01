const state = {
  token: localStorage.getItem('token')
}
const getters = {
  user: state => state.token
}

const mutation = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
}

const action = {
  GetToken({commit}, token) {
    commit('SET_TOKEN', token);
  }
}

const user = {
  state,
  getters,
  mutation,
  action
}

export default user
