<template>
	<div>
		<div class="header-search">
			<a href="Home.vue">首页 </a>> 联系我们
		</div>
		<div class="contact">
			<div class="contact-left">
				<div class="contact-1"></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.header-search{
		width: 100%;
		height: 80px;
		background: #ccc;
		text-align: left;
		text-indent: 110px;
		line-height: 80px;
		font-size: 14px;
	}
	.header-search a{
		text-decoration: none;
		color: black;
	}
	.contact{
		width: 1280px;
		height: 376px;
		margin: 50px auto;	
		background-color: lime;
		overflow: hidden;
	}
	.contact-left{
		width: 726px;
		height: 100%;
		float: left;
	}
	.contact-1{
		width: 100%;
		height: 63px;
		border-bottom: 1px dashed #CCC;
	}
	
</style>