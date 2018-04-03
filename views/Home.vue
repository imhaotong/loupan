<template>
	<div>
  <div class="home">
  </div>
  
  <div id="lunbo">
	 <div id="lunboTu">
		 <img src="images/1.png" alt="">
		 <img src="images/2.png" alt="">
		 <img src="images/3.png" alt="">
		 <img src="images/1.png" alt="">
	 </div>
	 <ul id="lunboNum">
		 <li class="checked"></li>
		 <li></li>
		 <li></li>
		
	 </ul>
	 <button id="btnL">&lt;</button>
	 <button id="btnR">&gt;</button>
 </div>
 <div id="content">
 	<div id="content2">
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
 		<div class="right">
 			<div class="news">
 			<div class="read">
 				<div class="read-top">
 				<button></button>
 				<button>楼市动向 -NEWS</button>
 				<button class="read-more">阅读更多</button>
 				</div>
 			</div>
 			<div class="news-centent">centent</div>
 			<div class="news-tel">tel</div>
 			<div class="news-form">form</div>
 			<div class="news-address">address</div>
 			
 			</div>
 		</div>
 		
 		
 	</div>
 </div>
  
  
 </div> 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Haotong from '@/components/Haotong.vue'

export default {
  name: 'home',
  data(){
      return {
        state:[]
      }
    },
  components: {
    HelloWorld,
    Haotong
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
	*{
		margin: 0;
		padding: 0;
	}
	*{
			margin: 0;
			padding: 0;
		}
		#lunbo{
			width: 1260px;
			height: 500px;
			margin: 0 auto;
			position: relative;
			z-index: 10;
			overflow: hidden;
		}
		#lunbo #lunboTu{
			width: 5040px;
		}
		#lunbo #lunboTu img{
			width: 1260px;
			height: 500px;
			float: left;
			display: block;
		}
		#lunbo #lunboNum,#lunbo #lunboTu{
			float: left;
			position: absolute;
			z-index: 11;
		}
		#lunbo #lunboNum{
			margin: 260px -30px;
			left: 50%;
		}
		#lunbo #btnL,#btnR{
			position: absolute;
			z-index: 11;
			float: left;
			top: 200px;
			border: 3px solid #ccc;
			background-color: #fff;
			width: 20px;
			height: 20px;
		}
		#lunbo #btnL{
			left: 15px;
		}
		#lunbo #btnR{
			right: 15px;
		}
		#lunbo #lunboNum li{
			float: left;
			list-style: none;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: #fff;
			z-index: 11;
			margin: 5px;
		}
		#lunbo #lunboNum .checked{
			background-color: #ff1012;
		}
		#content{
			width: 1200px;
			margin: 30px auto;
		}
		#content2{
			width: 100%;
			height: 1900px;
			
			overflow: hidden;
		}
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
		
		
		.right{
			width: 270px;
			height: 1300px;
		
			float: left;
            margin-left: 30px;			
		}
		.right div{
			margin-top: 10px;
			background-color: #ccc;
		}
		.news{
			width: 100%;
			height: 485px;
			background: #ccc;
		}
		.read{
			width: 98%;
			height: 65px;
			overflow: hidden;
			background: #ccc;
		}
		.read button{
			float: left;
			border: none;
			outline: none;
			margin: 20px 10px;
		}
		.read button:nth-child(1){
			width: 20px;
			height: 20px;
			background: black;
		}
		
		.read button:nth-child(3){
			width: 66px;
			height: 24px;
			border: 1px solid black;
			text-align: center;
			line-height: 24px;
			font-size: 12px;
			float: left;
		}
		.news-centent{
			width: 98%;
			height: 410px;
			margin: 10px 5px 0 0;
		}
		.news-tel{
			width: 100%;
			height: 268px;
		}
		.news-form{
			width: 100%;
			height: 410px;
		}
		.news-address{
			width: 100%;
			height: 126px;
		}
</style>
