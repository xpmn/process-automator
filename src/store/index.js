import Vue from 'vue'
import Vuex from 'vuex'
import applications from './modules/applications'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    addApplication ({ commit }, application) {
      commit(types.ADD_APPLICATION, { application })
    }
  },
  // getters: {}
  modules: {
    applications
  }
})
