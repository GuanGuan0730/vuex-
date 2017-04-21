<template>
	<div id="bottom" class="navbar navbar-inverse ">
		<router-link :to='{path:"/home"}' class="pull-left navbar-text  glyphicon glyphicon-home"></router-link>
		<router-link :to="{path:'/config'}" class="navbar-text glyphicon glyphicon-wrench"></router-link>
		<router-link :to="{path:'/message'}" class="navbar-text pull-right glyphicon glyphicon-info-sign"></router-link>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'bottom' 
	 
	}
</script>
<style scoped="scoped">
	.router-link-active {
		color: orange;
	}
	
	#bottom {
		margin: 0;
		width: 100vw;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around !important;
	}
	
	#bottom a {
		width: calc(100vw / 3);
		text-align: center;
		font-size: 19px;
		text-decoration: none !important;
	}
	
	#bottom a:hover {
		text-decoration: none !important;
	}
	
	#bottom a:active {
		color: white;
		text-decoration: none !important;
	}
	
	.center {}
</style>