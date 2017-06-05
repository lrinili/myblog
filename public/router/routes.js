
import login from '../component/login.vue'
import content from '../component/content.vue'
//import error from '../component/error.vue'


const errorw = resolve  => require(['../component/error.vue'],resolve)
//const Foo = resolve => require(['./Foo.vue'], resolve)
const routes = [
  {path:'/login',component:login,meta: { auth: true }},
  {path:'/index',component:content, meta: { auth: true }},
  {path:'/404',component:errorw, meta: { auth: true }},
  {path:'*',redirect:'/404' ,meta: { auth: true }}
]
export default routes
