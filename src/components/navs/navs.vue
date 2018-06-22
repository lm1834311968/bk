<template>
	<nav>
		<ul>
			<li><i class="el-icon-tickets"></i><div>首页</div></li>
			<li><i class="el-icon-edit"></i><div>想法</div></li>
			<li><i class="el-icon-circle-plus add" @click="addNavs">
				<ul :class="{transition:isTransition}">
					<li class="subnavs1">发表</li>
					<li class="subnavs2">发表</li>
					<li class="subnavs3">发表</li>
				</ul>
			</i></li>
			<li><i class="el-icon-bell"></i><div>更多</div></li>
			<li><i class="el-icon-menu"></i><div>我的</div></li>
		</ul>
	</nav>
</template>

<script>
	export default{
		data(){
			return {
				isTransition:false
			}
		},
		methods:{
			addNavs(){
				this.isTransition=!this.isTransition;
			}
		}
	}
</script>

<style lang="less">
	nav{
	position: fixed;
	width: 100%;
	bottom: 0;
	font-size: 13px;
	line-height: 20px;
	color: #959aa0;
	background: #fff;
	padding: 6px 0;
	>ul{
		display: flex;
		>li{
			flex: 1;
			text-align: center;
			>i{
				font-size: 21px;
			}
			.add{
				font-size: 37px;
				margin-top: 3px;
				position: relative;
				ul{
					position: absolute;
					transform: scale(0);
					transition: all .4s cubic-bezier(.4,.46,.3,1.31);
					left: 18px;
					top: 13px;
					&.transition{
						transform: scale(1);
					}
					li{
						position: absolute;
						background: #fff;
						height: 50px;
						width: 50px;
						line-height: 50px;
						text-align: center;
						font-size: 14px;
						border-radius: 50%;
					}
					.subnavs1{
						top: -92px;
						left: -89px;
					}
					.subnavs2{
						top: -110px;
						left: -24px;
					}
					.subnavs3{
						top: -92px;
						left: 41px;
					}
				}
			}
			&.active{
				color: #ebba49;
			}
		
		}
	}
}
</style>