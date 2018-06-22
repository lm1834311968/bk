<template>
	<div class="list">
		<ul>
			<li v-for="list in lists">
				<h6>{{list.title}}</h6>
				<p>{{list.text}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				lists:[
				{
					title:'css的垂直居中方式',
					text:'Flex布局实现圣杯布局,左右两列固定、中间列自适应的三列式布局 举报原因: 色情 政治 抄袭 广告 招聘 骂人 其他 原文地址: 原因补充: 最多只允许输入30个字..'
				},
				{
					title:'重构：以Java POI 导出EXCEL为例',
					text:'重构 开头先抛出几个问题吧，这几个问题也是《重构：改善既有代码的设计》这本书第2章的问题。 什么是重构？ 为什么要重构？ 什么时候要重构？ 接下来就从这几个问题出发，通过这几个问题来系统的了解重构的意义。'
				}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@color:#5e5140;
	@background:#fcd9ad;
	@width:1000px;
	 .list{
		ul{
			li{
				background: @background;
				margin: 10px;
				padding:4px 10px;
				color:@color;
				h6{
					font-size: 16px;
					line-height: 30px;
					font-weight: normal;
				}
				p{
					text-indent: 2em;
					line-height: 20px;
				}
			}
		}
	 }
</style>