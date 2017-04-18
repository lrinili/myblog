import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue'  //主页面
import router from './router/index.js' //路由规则 index页面路由实例创建 并且暴露router ,routes返回路由规则
import store from './store/index.js'
new Vue ({
  el:'#app',
  router,
  store,
   render: (h)=>{
     return h(App)
   }

})
