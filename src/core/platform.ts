// See: https://qmsg.zendee.cn/

import { getDateTime } from '../utils/time'

let notifyForQMsg = '3ecc95c53d02420525bf9714aaf7d8d1'

export function sendNotify(data: string) {
	toastLog('发送通知： ')
	let url = 'https://qmsg.zendee.cn/send/' + notifyForQMsg
	console.log('url', url)
	http.post(url, {
		msg: getDateTime(1) + ' 打卡结果\n' + data,
	})
}
