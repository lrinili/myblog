<template >
  <div >
    这是{{name}}bo的第{{counts}}页
     <button  class="btn btn-info" @click="increment">添加{{counts}}</button>
       <my-radio v-model="name"  label="1"> </my-radio>
        <my-radio v-model="name"  label="2"> </my-radio>
       {{name}}
  </div>

</template>
<script>
import { mapState,mapActions } from 'vuex'
import MyRadio from './radio.vue'
   export default {
    components:{
      MyRadio
    },
     created(){
       let vm = this
             console.info('tokeninfo', JSON.parse(sessionStorage.getItem("user")).token)
       vm.$store.dispatch('getIndex')
        // setInterval(function(){

        //   console.log(vm.name)
        // }, 1000)
     },
        data(){
           return{
             name:'',
             count:'',
             val:'val'
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
