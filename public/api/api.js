
import instance from './index.js'
import barse from '../config.js'
const api = {
  login(data){
    return instance.post(barse.Url+'/login',data)
  },
  getIndex(){
    return instance.get(barse.Url+'/index')
  }
}


export default api
