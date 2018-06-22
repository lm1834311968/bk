<template>
	<div class="sub-menu">
		<ul>
			<li  v-for='(navname,index) in menudatas' :key='navname.name' :class="[active==index ? 'active' : '']"  @click='choose(index,navname.name)'>
				{{navname.name}}
				<!--<router-link  tag='div' :to="{path:navname.page,query:{code:navname.name,index:index}}">{{navname.name}}</router-link>-->
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['menudatas'],
		data() {
			return {
				active:0
			}
		},
		methods:{
			choose(index,name){
				this.active=index;
				this.$emit('subNavClick',index,name)
			}
		}
	}
</script>

<style lang="less">
	.sub-menu{
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		width: 100%;
		overflow: hidden;
		ul{
			white-space: nowrap;
			overflow-y: auto;
			 &::-webkit-scrollbar {display:none}
			li{
				display: inline-block;
				padding: 0 20px;
				&.active{
					color: red;
				}
			}
		}
	}
</style>