import instance from './index.js'

const api = {
  login(data){
    return instance.post('/xxx',data)
  }
}


export default api
