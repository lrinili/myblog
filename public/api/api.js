import instance from './index.js'
import barse from '../config.js'

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(config=>{
 
  return config
},err=>{
  // store.dispatch('showProgress',100)
  return Promise.reject(err)
})




const api = {
  login(data){
    return axios.post(barse.Url+'/login',data)
  }
}


export default api
