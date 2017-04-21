export default {

	focus(state) {
		state.isAction = false
	},
	click(state) {
		console.log('进入了')
		if(state.jbgz > 0) {
			state.isAction = true
			console.log('‘')
			state.iserror = false
		} else {
			state.isAction = false
			state.iserror = true
		}

	},
	canshu(state, config) {
		console.log('name:' + config.name + ',' + 'value:' + config.value)
		state[config.name] = config.value
	}

}