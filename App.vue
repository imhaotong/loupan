<template>
  <div id="app">
    <div id="nav">
    	<img id="img" src="../public/images/realestate.png" alt="" />
    	<ul id="ul">
      <router-link id="a1" to="/">首页</router-link> 
      <router-link id="a2" to="/about/1">全新楼盘</router-link>
       <router-link id="a3" to="/about/2">二手楼盘</router-link>
        <router-link id="a4" to="/about/3">全新商铺</router-link>
         <router-link id="a5" to="/loushi">楼市动态</router-link>
          <router-link id="a6" to="/our">联系我们</router-link>
          </ul>
          <img id="img2" src="../public/images/zixun.jpg" alt="" />
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
	width: 100%;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#img{
	margin: 24px 1000px 24px 0;
}
#ul{
	width: 740px;
	height: 48px;
	line-height: 20px;
	margin: -50px 0 0 255px;
}
#a1,#a2,#a3,#a4,#a5,#a6{
	margin-left: 50px;
}
#img2{
	margin: -150px 0 20px 900px ;
}


</style>
