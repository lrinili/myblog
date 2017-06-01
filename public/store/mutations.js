import {UESR_LOGIN,USER_REG,increments,SAVE_TOKEN} from './type.js'
 const motations = {
   [increments](state,payload){
     state.count+=payload
   },
   [SAVE_TOKEN](state,payload){
     state.token = payload
   }
 }

export default motations
