<template>
	<div>
		
 				<li v-for="i in state">
 				<p><img :src="i.img"/></p>
 				<h3>{{i.name}}</h3>
 				<p>{{i.address}}</p>
 				<p>{{i.house}}</p>
 				<p>{{i.price}}</p>
 				</li>
 	

	</div>
</template>

<script>
	export default {
  data(){
      return {
        state:[]
      }
   },
    watch:{
     '$route'(){
       this.$http.post('http://localhost:8002',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
     }
   },
    created(){
      this.$http.post('http://localhost:8002',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
    }
}
</script>

<style>
</style>