import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user'
import generalModule from './general'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    generalModule,
    userModule
  }
})
