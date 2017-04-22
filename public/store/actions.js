import api from '../api/api.js'
export default {
  increments({commit,state}){  //在actiuon可以出现异步
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        commit('increments',10)
      },1000)
    })

  },
  login({commit,state},obj){
  	
  		api.login(obj).then((resp)=>{
  			console.log('success')
  		})
  	

  }
}
