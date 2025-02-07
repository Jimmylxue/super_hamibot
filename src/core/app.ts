// import { getLoopTime } from './device'

// export function preventSleep() {
// 	// 防止息屏
// 	threads.start(function () {
// 		setInterval(() => {
// 			toastLog('防止锁屏策略')
// 		}, getLoopTime())
// 	})
// }
export function closeApp(packageName: string) {
	/**
	 * 方案一：打开应用详情页强制停止
	 * 方案二：不断返回首页
	 * 方案三：root下shell
	 * shell('am force-stop ' + PACKAGE_NAME, true)
	 */
	log(currentActivity())
	app.openAppSetting(packageName)
	// @ts-ignore
	this.sleep()
	// @ts-ignore
	this.click(textEndsWith('停止'))
	// @ts-ignore
	this.sleep()
	// @ts-ignore
	this.click(textEndsWith('停止'))
}
