export default {
	calc: (state, zhichu) => {
		console.log('在运行1')
		const { jbgz, jx, jj, yl, yll, zfgjj, sy, sl, sskc, sds } = state
		const jb = (jbgz + jx + jj) * ((100 - yl - yll - zfgjj - sy) / 100)
		const base = jb - 3500
		console.log('奖金:' + jj + ',' + '绩效：' + jx)
		if(jbgz <= 0) {
			state.isAction = false
			state.iserror = true
			return
		} else {
			state.isAction = true
			state.iserror = false

		}
		if(base < 0) {
			state.sl = 0
			state.sskc = 0
			console.log('小于0')
		} else if(base < 1500 && base > 0) {
			console.log(1)
			state.sl = 3
		} else if(base > 1500 && base < 4500) {
			console.log(2)
			state.sl = 10
			state.sskc = 105
		} else if(base > 4500 && base < 9000) {
			state.sl = 20
			console.log(3)
			state.sskc = 555
		} else if(base > 9000 && base < 35000) {
			state.sl = 25
			console.log(4)
			state.sskc = 1005
		} else if(base > 35000 && base < 45000) {
			state.sl = 30
			console.log(5)
			state.sskc = 2055
		} else if(base > 45000) {
			state.sl = 40
			console.log(6)
			state.sskc = 3055
		}
		console.log(zhichu.zhichu + 'zhichus')
		state.sds = Math.round(base * (state.sl * 0.01)) + state.sskc
		return jbgz - zhichu.zhichu
	},
	zhichu: (state) => {
		const { jbgz, jx, jj, yl, yll, zfgjj, sy, sl, sskc, sds } = state
		console.log(jbgz + '基本工资')
		var zc = (sy + yl + yll + zfgjj) / 100 * jbgz + sskc + sds
		console.log(zc + '支出')
		return Math.round(zc)

	} 
	
	
}