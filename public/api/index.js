import axios from 'axios'
import  base from '.././config.js'
//创建实例

const instance = axios.create({
  baseUrl:base.Url,

})
instance.defaults.headers.post['Content-Type'] = 'application/json' //实例请求头
//可以设置请求头带token
//拦截器
instance.interceptors.request.use(function(config) {     //请求前的配置

})
instance.interceptors.response.use(function(resp){    //返回的拦截器
  return resp
},function(err){
  console.log('错误',err)
})


export default instance
