// 获取当前时间，默认格式: 2021/09/18 14:00:00
// rule:
// 1: 格式: 2021/09/18
// 2: 格式: 2021-09-18
function getDateTime(rule: number) {
	let date = new Date()
	let year = date.getFullYear()
	let month = String(date.getMonth() + 1)
	let day = date.getDate()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()

	if (+month < 10) {
		month = '0' + month
	}
	if (day < 10) {
		// @ts-ignore
		day = '0' + day
	}
	if (hour < 10) {
		// @ts-ignore
		hour = '0' + hour
	}
	if (minute < 10) {
		// @ts-ignore
		minute = '0' + minute
	}
	if (second < 10) {
		// @ts-ignore
		second = '0' + second
	}

	switch (rule) {
		case 1:
			return year + '/' + month + '/' + day
		case 2:
			return year + '-' + month + '-' + day
		default:
			return (
				year +
				'/' +
				month +
				'/' +
				day +
				' ' +
				hour +
				':' +
				minute +
				':' +
				second
			)
	}
}
