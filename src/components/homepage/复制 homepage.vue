<template>
	<div class="center-bg">
		<header>
			<div class="title"><span>畅想</span>畅开你想象的世界</div>
		</header>
		<div class="content">
			<navs class='layout-left'></navs>
			<list class='layout-center'></list>
			<author class='layout-right'></author>
		</div>
		
	</div>
</template>

<script>
	import Navs from 'components/navs/navs'
	import List from 'components/list/list'
	import Author from 'components/author/author'
	export default{
		components:{
			Navs,
			List,
			Author
		}
	}
</script>
<!--f9e5b5-->
<style lang='less' scoped>
	@color:#fffbf4;
	@background:#ebba49;
	@width:1000px;
	.center-bg{
		background: #e9e9e9;
		 min-height: 100%;
		header{
			height: 40px;
			line-height: 40px;
			font-size: 26px;
			padding-left: 42px;
			color:@color;
			background: @background;
		}
		.title{
			width: @width;
			margin: 0 auto;
			span{
				font-size: 30px;
				padding-right:20px ;
			}
		}
		.layout-center{
			flex: 1;
		 	
		}
		.content{
			width: @width;
			margin: 0 auto;
			display: flex;
			.layout-left{
				flex:0 0 50px;
			}
			.layout-right{
				flex:0 0 124px
			}
		}
		
	}
	
</style>