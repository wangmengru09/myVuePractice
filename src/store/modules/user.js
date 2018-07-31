const state = {
  token: localStorage.getItem('token')
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
  mutation,
  action
}