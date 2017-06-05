import api from '../api/api.js'
export default {
    increments({ commit, state }) { //在actiuon可以出现异步
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increments', 10)
                }, 1000)
            })

        },
        login({ commit, dispatch, state }, obj) {

            // return new Promise((resolve,reject)=>{
            //    api.login(obj).then((resp)=>{
            //         commit('SAVE_TOKEN','token')
            //    resolve(resp)
            //  })
            // })

            return api.login(obj).then((resp) => {
                sessionStorage.setItem("user", JSON.stringify(resp.data.data)); //存token在sessionStorage，或者cookie   Cookies.set('user',resp.data.data)
                return Promise.resolve(resp)
            }).then((data) => {
                dispatch('saveToken', data.data.data.token)
                return Promise.resolve(data)
            })


        },
        getIndex({ commit }) {
            return api.getIndex()
        },
        saveToken({ commit, state }, payload) {
            commit('SAVE_TOKEN', payload)
        }
}
