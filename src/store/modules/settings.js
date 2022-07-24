import * as types from '../mutation-types'

const settings = {
  state: {
    iftttLink: ''
  },
  mutations: {
    [types.SET_SETTINGS] (state, { data }) {
      state.iftttLink = data.iftttLink
    }
  },
  actions: {
    async loadSettungs ({ commit }) {
      try {
        let data = await JSON.parse(localStorage.getItem('settings'))
        if (data === null) data = []
        commit(types.SET_SETTINGS, {data: data})
      } catch (err) {
        localStorage.setItem('settings', '[]')
        console.log(err)
      }
    },
    saveData ({ commit, state }) {
      localStorage.setItem('apps', JSON.stringify(state.list || []))
    }
  },
  getters: {
    getApplications: (state) => state.list
  }
}

export default settings
