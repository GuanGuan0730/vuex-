<template>
	<div id="app">
		
		<navbar></navbar>
		<router-view></router-view>
		<bottombar></bottombar>
	</div>
</template>

<script>
	import navbar from './components/nav'
	import bottombar from './components/bottom'
	export default {
		name: 'app',

		components: {
			navbar,
			bottombar
		}
	}
</script>

<style type="text/css">
	nav{
		width: 100vw;
		z-index: 1000;
		position: fixed !important;
		top: 0;
	}
	body{
		padding-top: 65px;
		padding-bottom: 50px;
	}
</style>