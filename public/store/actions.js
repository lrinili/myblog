
export default {
  increments({commit,state}){  //在actiuon可以出现异步
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        commit('increments',10)
      },1000)
    })

  }
}
