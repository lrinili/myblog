import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state,payload){
       state.count=state.count+payload
    }
  },
  actions:{
  	increaments({commit},payload){
  		 console.log(payload)
  		commit('increment',payload)
  	}
  }
})
export default store
