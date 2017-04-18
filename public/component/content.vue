<template >
  <div >
    这是{{name}}bo的第{{counts}}页
     <button  class="btn btn-info" @click="increment">添加{{counts}}</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
   export default {
        data(){
           return{
             name:'lly',
             count:''
           }
         },
         computed: mapState({
           counts:state=>state.count
         }),
         methods:{
           increment(){
            //this.$store.commit('increment')
            this.$store.dispatch('increaments',10)
            //this.count = this.$store.state.count
           }
         }
     }






</script>
