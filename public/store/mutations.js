import {UESR_LOGIN,USER_REG,increments} from './type.js'
 const motations = {
   [increments](state,payload){
     state.count+=payload
   }
 }

export default motations
