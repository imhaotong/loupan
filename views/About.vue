<template>
  <div class="about">
    		<div id="left">
 			<div class="img-box">
 			<img src="../../public/images/shafa.jpg" alt="" />
 			<img src="../../public/images/shafa.jpg" alt="" />
 			<img src="../../public/images/shafa.jpg" alt="" />
 			<img src="../../public/images/shafa.jpg" alt="" />
 			</div>
 			<div class="quanxin">
 				<h3></h3>
 				<h4></h4>
 			</div>
 			<div class="shangpu-ul">
 				<li v-for="i in state">
 				<p><img :src="i.img"/></p>
 				<h3>{{i.name}}</h3>
 				<p>{{i.address}}</p>
 				<p>{{i.house}}</p>
 				<p>{{i.price}}</p>
 				</li>
 			</div>
 			<div class="more">
 				<button>浏览更多楼盘</button>
 			</div>
 			<div class="quanxin">
 				<h3></h3>
 				<h4></h4>
 			</div>
 			<div class="shangpu-ul">
 				<li v-for="i in state">
 				<p><img :src="i.img"/></p>
 				<h3>{{i.name}}</h3>
 				<p>{{i.address}}</p>
 				<p>{{i.house}}</p>
 				<p>{{i.price}}</p>
 				</li>
 			</div>
 			<div class="more">
 				<button>浏览更多楼盘</button>
 			</div>
 			<div class="quanxin">
 				<h3></h3>
 				<h4></h4>
 			</div>
 			<div class="shangpu-ul">
 				<li v-for="i in state">
 				<p><img :src="i.img"/></p>
 				<h3>{{i.name}}</h3>
 				<p>{{i.address}}</p>
 				<p>{{i.house}}</p>
 				<p>{{i.price}}</p>
 				</li>
 			</div>
 				<div class="more">
 				<button>浏览更多楼盘</button>
 			</div>	
 		</div>
  </div>
</template>

<script>
	export default {
  name: 'home',
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
	#left{
			width: 820px;
			height: 1300px;
			background-color: yellowgreen;
			float: left;
		}
		.img-box{
			width: 820px;
			background-color: #0000FF;
		}
		.img-box img{
			width: 48%;
		    margin: 5px;
		}
		.quanxin{
			width: 100%;
			height: 96px;
			margin-top: 40px;
			background-color: #ccc;
		}
		.quanxin h3,h4{
			text-align: center;
		}
		.shangpu-ul{
			width: 100%;
			height: 320px;
			line-height: 30px;
			font-size: 14px;
			overflow: hidden;
		}
		.shangpu-ul li{
			width: 33%;
			height: 100%;
			float: left;
			list-style: none;
		}
		.more{
			width: 100%;
			height: 70px;
		    background-color: #999;	
		}
		.more button{
			width: 136px;
			height: 38px;
			background-color: #999;
			margin: 18px auto;
		}
</style>
