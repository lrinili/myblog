<template >
  <div >
    这是{{name}}bo的第{{counts}}页{{count}}
     <button  class="btn btn-info" @click="increment">添加{{counts}}</button>
     <other-tree message="hello" v-on:showName='showNameToal' >
       <h2>header</h2>
     </other-tree>

     <my-radio v-model="myName" label="aaa"></my-radio>
      <my-radio v-model="myName" label="bbb"></my-radio>
     {{myName}}
  </div>
</template>
<script>
import { mapState,mapActions,mapGetters } from 'vuex'
import OtherTree from './tree.vue'
import MyRadio from './radio.vue'
   export default {
    components:{
      OtherTree,
      MyRadio
    },
     created(){
       let vm = this
             console.info('tokeninfo', JSON.parse(sessionStorage.getItem("user")).token)
       vm.$store.dispatch('getIndex')

     },
        data(){
           return{
             name:'lly',
             count:'',
             showTree:false,
             myName:'aaa',
             myName2:'11122'
           }
         },
         computed:{...mapGetters({counts:'showTotall'})},
         methods:{

          ...mapActions({increment:'increments'}),  
          
          showNameToal(data,e){
            this.count="111"
            console.log('1111',data)
          }
         }
     }






</script>
