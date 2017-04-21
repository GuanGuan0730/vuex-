import Vue from 'vue'

import Vuex from 'vuex'

import $ from 'jquery'

import mutations from './mutations'

import getters from './getters'

import actions from './avtions'

Vue.use(Vuex)

const state = {
	isAction: false,
	jbgz: 0,
	jx: 0,
	jj: 0,
	sy: 0.2,
	yl: 8,
	yll: 2,
	zfgjj: 12,
	sl: 0,
	sskc: 0,
	sds: 0,
	iserror: false,
	$
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions

})