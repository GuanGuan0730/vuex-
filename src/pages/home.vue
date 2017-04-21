<template>
	<div>
		<div style="position: fixed;top: 80px;display: flex;justify-content: center;flex-wrap: wrap;">
			<form class="form-horizontal" @submit.prevent>
				<div class="group">

					<div :class="{'has-warning':iserror,'has-success':jbgz}"><input min="1" step="220" :class="{}" @focus='focuss' @input='changeTo("jbgz",$event)' :value="jbgz" class="form-control" type="number" v-model.number='jbgz' placeholder="您的基本工资/不能低于基本工资" /></div>
					<div :class="{'has-success':jx}"><input min="0" step="20" @focus='focuss' @input='changeTo("jx",$event)' class="form-control" type="number" :value="jx" placeholder="您的绩效" /></div>
					<div :class="{'has-success':jj}"><input min="0" step="20" @focus='focuss' @input='changeTo("jj",$event)' class="form-control" type="number" :value='jj' placeholder="您的的奖金" /></div>
				</div>

				<div class="clear"> </div>
			</form>

			<button class="btn btn-info btn-block" style="z-index: 180000;" @click='click'>{{isAction?'正在计算~':'开始计算'}}</button>
		</div>

		<div style=" width: 100vw;height: 38vh;overflow: scroll;position: relative;z-index: 0;top: 180px;">
			<ul class="list-group" v-if="isAction" style="box-shadow: 0 0 15px slategrey;">
				<li class="list-group-item">失业 ：{{parseInt(jbgz*sy / 100)}}({{sy}}%)</li>
				<li class="list-group-item">养老：{{parseInt(jbgz*yl / 100)}}({{yl}}%)</li>
				<li class="list-group-item">失业医疗：{{parseInt(jbgz*yll / 100)}}({{yll}}%)</li>
				<li class="list-group-item">住房公积金：{{parseInt(jbgz*zfgjj / 100)}}({{zfgjj}}%)</li>
				<li class="list-group-item">个人所得税：{{parseInt(sds)}}({{sl}}%)</li>
				<li class="list-group-item">速算扣除{{sskc}}</li>
				<li class="list-group-item">共计支出：{{zhichus}}</li>
				<li class="list-group-item"> 税前工资：{{jbgz+jx+jj}} ,税后：{{calcvue}}</li>
			</ul>
		</div>
		<div v-show="iserror">
			<hr />
			<p class="text-center"> 亲 请输入合理工资哦！</p>
		</div>

	</div>
</template>

<style type="text/css" scoped="scoped">
	form {
		display: flex;
		justify-content: center;
	}
	
	form input {
		margin: 5px 0;
		width: 80vw;
	}
	
	.list-group {
		width: 80vw;
		margin: 15px auto;
	}
	
	button {
		width: 80vw;
		margin: 0 auto !important;
	}
	
	.clear {
		clear: both !important;
	}
</style>
<script>
	import { mapState, mapGetters, mapActions } from 'vuex'

	export default {

		methods: {
			changeTo(name, event) {
				const value = Number(event.target.value)
				const obj = {
					name,
					value
				}
				this.canshu(obj)
				this.calcvue

			},
			...mapGetters(['click']),
			...mapActions(['focuss', 'click', 'canshu'])

		},
		computed: {

			...mapGetters({
				calcvue: 'calc',
				zhichus: 'zhichu'

			}),
			...mapState([
				'jbgz',
				'jx',
				'jj',
				'sl',
				'yll',
				'sy',
				'yl',
				'sds',
				'sskc',
				'zfgjj',
				'isAction',
				'iserror'
			])

		}

	}
</script>