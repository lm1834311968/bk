<template>
	<div>
		<div @click="goBack" class="head">
			<i class="icon-back"></i>
		</div>
		<h5>{{pageDetail.title}}</h5>
		<div class="detail-content">
			<p>{{pageDetail.text}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['pageDetail'],
		methods: {
			goBack() {
				this.$emit('goBack');
			}
		}
	}
</script>

<style lang="less" scoped>
	.head {
	border-bottom: 1px solid #dedede;
	}
	
	.icon-back {
		display: inline-flex;
		height: 14px;
		width: 14px;
		margin: 12px;
		background: url(./images/icon-back.png) no-repeat;
		background-size: 100%;
	}
	
	h5 {
		text-align: center;
		line-height: 30px;
		font-weight: normal;
		font-size: 20px;
		color: #5d5d5d;
	}
	
	.detail-content {
		padding: 10px 20px;
		font-size: 14px;
		color: #5e5140;
		p {
			text-indent: 2em;
		}
	}
</style>