import * as types from '../mutation-types'

export default applications = {
  state: {
    list: []
  },
  mutations: {
    [types.LOAD_APPLICATION_LIST] (state, { data }) {
      state.list = data
    },
    [types.ADD_APPLICATION] (state, { app }) {
      state.list.push(app)
    },
    [types.UPDATE_APPLICATION] (state, { id, app } ) {
      delete state.list[id]
    },
    [types.DELETE_APPLICATION] (state, id) {
      delete state.list[id]
    }
  },
  actions: {
    async loadApplicationList ({ commit }) {
      try {
        let data = await JSON.parse(localStorage.getItem('apps');)
        if (data === null) data = []
        commit(types.LOAD_APPLICATION_LIST, {data: data})
      } catch (err) {
        localStorage.setItem('apps', "[]");
        console.log(err)
      }
    }
  },
  getters: {
    getApplications: (state) => state.list
  }
}
