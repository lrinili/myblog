import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getter.js'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
