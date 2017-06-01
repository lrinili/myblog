<template>
	<div>
		tree{{name}}
		<button v-on:click="showName">{{name}}</button>
		<slot></slot>
	</div>
</template>
<script>
  export default {
     props:{
     	message:String
     },
     data(){
     	return{
           'name':this.message
     	}
     },
     methods:{
        showName:function(){
        	this.name=Date.now()
        	this.$emit('showName','8')
        }
     }   
	}
</script>