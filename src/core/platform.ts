// See: https://qmsg.zendee.cn/

let notifyForQMsg = '3ecc95c53d02420525bf9714aaf7d8d1'

export function sendNotify(data: string) {
	if (notifyForQMsg) {
		log('发送通知： ', data)
		let url = 'https://qmsg.zendee.cn/send/' + notifyForQMsg
		http.post(url, {
			msg: getDateTime(1) + ' 打卡结果\n' + data,
		})
	}
}
