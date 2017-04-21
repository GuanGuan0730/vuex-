<template>
	<div id="from">
		<form action="" @submit.prevent class="navbar-form ">
			<div class="form-control text-right">
				<b>失业</b> <input type="text" :value="sy" @input='change("sy",$event)' /><span>%</span>
			</div>
			<div class="form-control text-right">
				<b>养老</b> <input type="text" :value="yl" @input='change("yl",$event)' /> <span>%</span>
			</div>
			<div class="form-control text-right">
				<b>失业医疗</b> <input type="text" :value="yll" @input='change("yll",$event)' /> <span>%</span>
			</div>
			<div class="form-control text-right">
				<b>住房公积金</b><input type="text" :value="zfgjj" @input='change("zfgjj",$event)' /> <span>%</span>
			</div>

		</form>

	</div>
</template>

<script type="text/javascript">
	import { mapActions, mapState } from 'vuex'
	export default {
		methods: {
			...mapActions(['canshu']),
			change(name, $event) {
				const value = Number($event.target.value)
				const obj = { name, value }
				this.canshu(obj)
			}
		},
		computed: {
			...mapState(['sy', 'yl', 'yll', 'zfgjj'])
		}
	}
</script>

<style type="text/css" scoped="scoped">
	#from form {
		width: 100% !important;
		display: flex;
		padding: 0 !important;
		margin: 0 !important;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	#from div {
		width: 80vw !important;
		margin: 3px 0;
	}
	
	b {
		width: 50vw;
		display: inline-block;
		text-align: center;
		float: left;
	}
	
	#from input {
		width: 40px !important;
		border: solid 1px gainsboro;
	}
</style>