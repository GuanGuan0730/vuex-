export default {

	focuss(context) {
		context.commit('focus')
		console.log('选中了')
	},
	click(context) {
		context.commit('click')
	},
	canshu(context, config) {
		console.log('name:' + config.name + ',' + 'value:mmg' + config.value)
		context.commit('canshu', config)
	}
}