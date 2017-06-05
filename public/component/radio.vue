<template>
	<div>

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
	}
</script>