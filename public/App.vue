<template >
  <div class="containers">
    <div class="main">
<!-- 路由匹配到的组件将渲染在这里 -->
 		<transition name="slide-fade" >
 	       <router-view></router-view>
 	    </transition>
    </div>
  </div>
</template>
<style>
 .containers{
   width: 100%;
   height: 100%
 }
 .main{
   width: 100%;
   height: 100%
 }



</style>
