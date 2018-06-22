import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import Login from 'components/login/login'
import Homepage from 'components/homepage/homepage'
import Main from 'components/main/main'
import List from 'components/list/list'
import Thought from 'components/thought/thought'
import Wait from 'components/wait/wait'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/homepage',
			name: 'Homepage',
			component: Homepage,
			children: [{
				path: '/',
				name: 'Main',
				components: {
					default: Main
				},
				children:[{
					path: '/',
					name: 'List',
					component: List,
					 meta: {
					  keepAlive: true // true 表示需要使用缓存
					  }
				},
				{
					path: '/list',
					name: 'List',
					component: List,
					 meta: {
					  keepAlive: true // true 表示需要使用缓存
					  }
				},
				{
					path: '/thought',
					name: 'Thought',
					component: Thought,
					 meta: {
					  keepAlive: true // true 表示需要使用缓存
					  }
				},
				{
					path: '/wait',
					name: 'Wait',
					component: Wait,
				}]
			},{
			path: '/wait',
			name: 'Wait',
			component: Wait,
		}]
		},
		{
			path: '/wait',
			name: 'Wait',
			component: Wait,
		}
	]
})