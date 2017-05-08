<template >
  <div >
    这是{{name}}bo的第{{counts}}页
     <button  class="btn btn-info" @click="increment">添加{{counts}}</button>
  </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
   export default {
     created(){
       let vm = this
       vm.$store.dispatch('getIndex')

     },
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
            this.$store.dispatch('increments')
            //this.count = this.$store.state.count
          }
         }
     }






</script>
