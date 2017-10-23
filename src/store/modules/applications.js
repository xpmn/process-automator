import * as types from '../mutation-types'

const applications = {
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
    [types.UPDATE_APPLICATION] (state, { app }) {
      state.list.forEach((application) => {
        if (app.id === application.id) {
          app = application
          app.edit = false
        }
      })
    },
    [types.DELETE_APPLICATION] (state, id) {
      delete state.list[id]
    }
  },
  actions: {
    async loadApplicationList ({ commit }) {
      try {
        let data = await JSON.parse(localStorage.getItem('apps'))
        if (data === null) data = []
        commit(types.LOAD_APPLICATION_LIST, {data: data})
      } catch (err) {
        localStorage.setItem('apps', '[]')
        console.log(err)
      }
    },
    saveData ({ state }) {
      localStorage.setItem('apps', JSON.stringify(state.list || []))
    },
    addApp ({ commit, dispatch }, app) {
      commit(types.ADD_APPLICATION, {app: app})
      dispatch('saveData')
    },
    updateApp ({ commit, dispatch }, app) {
      commit(types.UPDATE_APPLICATION, {app: app})
      dispatch('saveData')
    },
    deleteApp ({ commit, dispatch }, app) {
      commit(types.DELETE_APPLICATION, app.id)
      dispatch('saveData')
    }
  },
  getters: {
    getApplications: (state) => state.list
  }
}

export default applications
