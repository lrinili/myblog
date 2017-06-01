<template>
	<div>
		<input type="radio" v-model="model" :value='label'>
		<span>111</span>
	</div>
</template>
<script>
	export default {
		props:{
			name:String,
			disabled:Boolean,
			value:{},
			label:{}

		},
		data(){
			return{

			}
		},
		computed:{
			model:{
              get(){
              	
                return this.value
              },
              set(val){
              	console.log('val', val)
              	this.$emit('input',val)
              }
			}
		}

	}
</script>