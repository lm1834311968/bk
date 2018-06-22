<template>
	<div class="main">
		<search></search>
		<submenu @subNavClick='subNavClick' :menudatas=menudatas></submenu>
		<transition-group :name="transitionName" tag='div' class='transition-group'>
			<list 
				@showDetail='showDetail' 
				v-for='(menudata,index) in menudatas' 
				v-show='activeIndex==index' 
				:key='menudata.name'>
			</list>
		</transition-group>
		
		

		<!--<transition :name="transitionName">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive" class='Routers' />
			</keep-alive>
		</transition>-->

	</div>
</template>

<script>
	import Search from 'components/search/search'
	import Submenu from 'components/submenu/submenu'
	import List from 'components/list/list'
	export default {
		data() {
			return {
				transitionName: 'slide-left',
				menudatas:[
				{
					page:'list',
					name:'html'
				},
				{
					page:'thought',
					name:'css'
				},
				{
					page:'wait',
					name:'js'
				},
				{
					page:'wait',
					name:'jquery'
				},
				{
					page:'wait',
					name:'vue'
				},
				{
					page:'wait',
					name:'css3'
				},
				{
					page:'wait',
					name:'html5'
				}
				],
				activeIndex:0
			}
		},
		components: {
			Search,
			Submenu,
			List
		},
		　watch: {　　　
			'$route' (to, from) {　　　　
				if(to.query.index - from.query.index > 0) {
					this.transitionName = 'slide-right'
				} else {
					this.transitionName = 'slide-left'
				}

			}　
		},
		methods:{
			subNavClick(index,name){
				if(this.activeIndex<index){
					this.transitionName = 'slide-right'
				}else{
					this.transitionName = 'slide-left'
				}
				this.activeIndex=index;
			},
			showDetail(detail){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.main {
		height: 100%;
	}
	.transition-group{
		position: relative;
		height: calc(100% - 125px);
		>div{
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all 0.4s;
		position: absolute;
	}
	
	.slide-left-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	
	.slide-left-leave-to {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition: all 0.4s;
		position: absolute;
	}
	
	.slide-right-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	
	.slide-right-leave-to {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
</style>