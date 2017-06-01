
import login from '../component/login.vue'
import content from '../component/content.vue'

const routes = [
  {path:'/login',component:login},
  {path:'/index',component:content, meta: { requiresAuth: true }}
]
export default routes
