<template>
	<div class='search'>
		<div class="search-content">
			<input placeholder="请输入内容" />
			<button><i class="el-icon-search"></i></button>
		</div>
		<!--<el-input placeholder="请输入内容" class='search-content'>
			<el-button slot="append" icon="el-icon-search"></el-button>
		</el-input>-->
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.search {
		border-bottom: 1px solid #dedede;
		box-sizing:border-box;
		.search-content{
			box-sizing:border-box;
			padding: 4px 10%;
			position:relative;
			input{
				line-height: 30px;
				width: 100%;
				outline: none;
				box-sizing: border-box;
				border-radius: 10px;
				padding: 0 48px 0 20px;
				border:1px solid #dedede;
			}
			button{
				position:absolute;
				right: 10%;
				font-size: 16px;
				padding: 7px 16px;
				border: none;
				background: none;
				top: 4px;
				outline: none;
			}
		}
	}
</style>