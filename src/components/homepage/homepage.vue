<template>
	<div class="center-bg">
		<div class="main-tabs" @click=texts>
			<router-view v-show='order[0]==showLayer' />
			<page-show @goBack=goBack v-show='order[1]==showLayer'  :pageDetail='pageDetail'></page-show>
		</div>
		<navs></navs>
	</div>
</template>

<script>
	import Navs from 'components/navs/navs'
	import PageShow from 'components/pageshow/pageshow'
	import {mapGetters} from 'vuex'
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				order: [0, 1, 2]
			}
		},
		components: {
			Navs,
			PageShow
		},
		methods:{
			texts(){
//				console.log(this.pageDetail)
			},
			goBack(){
				//因为重名了，所以加s
				this.showLayers(0);
			},
			...mapMutations({
				showLayers:'showLayer'
			})
		},
		computed: {
			...mapGetters([
				'showLayer',
				'pageDetail'
			])
		}
	}
</script>
<!--f9e5b5-->
<style lang='less' scoped>
	.center-bg {
		background: #f8efdf;
		height: 100%;
	}
	
	.main-tabs {
		height: 100%;
	}
</style>