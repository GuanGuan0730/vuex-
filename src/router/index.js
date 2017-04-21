import Vue from 'vue'

import Router from 'vue-router'

import Home from '@/pages/home'

import Config from '@/pages/config'

import Message from '@/pages/message'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/home',
		name: 'index',
		component: Home
	}, {
		path: '/config',
		name: 'config',
		component: Config
	}, {
		path: '/message',
		name: 'message',
		component: Message
	},{
		path:'*',
		redirect:'/home'
	}]
})