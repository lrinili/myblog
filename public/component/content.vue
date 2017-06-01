<template >
  <div >
    这是{{name}}bo的第{{counts}}页{{count}}
     <button  class="btn btn-info" @click="increment">添加{{counts}}</button>
<<<<<<< HEAD
       <my-radio v-model="name"  label="1"> </my-radio>
        <my-radio v-model="name"  label="2"> </my-radio>
       {{name}}
=======
     <other-tree message="hello" v-on:showName='showNameToal' >
       <h2>header</h2>
     </other-tree>

     <my-radio v-model="myName" label="aaa"></my-radio>
      <my-radio v-model="myName" label="bbb"></my-radio>
     {{myName}}
>>>>>>> b5da6c3c4da52a11778fad059c2c5f321f437741
  </div>

</template>
<script>
<<<<<<< HEAD
import { mapState,mapActions } from 'vuex'
import MyRadio from './radio.vue'
   export default {
    components:{
=======
import { mapState,mapActions,mapGetters } from 'vuex'
import OtherTree from './tree.vue'
import MyRadio from './radio.vue'
   export default {
    components:{
      OtherTree,
>>>>>>> b5da6c3c4da52a11778fad059c2c5f321f437741
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
<<<<<<< HEAD
             name:'',
             count:'',
             val:'val'
=======
             name:'lly',
             count:'',
             showTree:false,
             myName:'aaa',
             myName2:'11122'
>>>>>>> b5da6c3c4da52a11778fad059c2c5f321f437741
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
