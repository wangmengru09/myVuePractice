const state = {
  defaultActiveIndex: localStorage.getItem('defaultActiveIndex')
}

const getters = {
  sidebar: state => state
}

const mutation = {
  SET_DefaultActiveIndex: (state, defaultActiveIndex) => {
    state.defaultActiveIndex = defaultActiveIndex;
  }
}

const action = {
  GetDefaultActiveIndex({commit}, token) {
    commit("SET_DefaultActiveIndex", token)
  }
}

const sidebar = {
  state,
  mutation,
  action,
  getters
}