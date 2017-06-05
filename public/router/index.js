import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import routes from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
scrollBehavior: () => ({ y: 50 }),
  

})

router.beforeEach(({path,meta},form,next)=>{

    if(path==='/login'){
    	return next()
    }
    if(store.state.token ===null){
    	return next('/login')
    }
    //判断权限
    if(meta.auth){
    	next();
    }else{
    	next('./404');
    }

      	
    
    
})

export default router
