<template>
	<div>
<<<<<<< HEAD
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

=======
		<input type="radio" name="myName" v-model="name" :disabled="isDisabled" :value='label'>
		<slot>姓名</slot>
	</div>
</template>
<script>
	export default{
		props:{
			disabled:Boolean,
			label:{},
			value:{}
		},
		data(){
			return {
			}
		},
		computed:{
			name:{
				get(){
					
                   return this.value
				},
				set(data){
				
					this.$emit('input', data);
				}
			},
			isDisabled(){
				return this.disabled
			}

		}
>>>>>>> b5da6c3c4da52a11778fad059c2c5f321f437741
	}
</script>