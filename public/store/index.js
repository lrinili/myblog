import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
       store.state.count++
      console.log('111',store.state.count)
    }
  }
})
export default store
