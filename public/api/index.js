import axios from 'axios'
import base from '.././config.js'
//创建实例

const instance = axios.create({
    baseUrl: base.Url,

})
instance.defaults.headers.post['Content-Type'] = 'application/json' //实例请求头


instance.interceptors.request.use(function(config) {
 //返回的拦截器

       if(sessionStorage.getItem('user')){
            var tokens = JSON.parse(sessionStorage.getItem('user')).token
          	 config.headers.Authorization = "Bearer "+tokens
          }
         
            return config
        }, function(err) {
            console.log('错误', err)
        })

instance.interceptors.response.use(function(resp) { //返回的拦截器
            return resp
        }, function(err) {
            console.log('错误', err)
        })


        export default instance
