// importClass(android.content.Context)
// importClass(android.provider.Settings)

/**
 * 解锁手机屏幕
 */
export function unlockScreen() {
	// 唤醒屏幕
	device.wakeUpIfNeeded()
}

/** 根据当前自动息屏时间获取循环时间 */
// export function getLoopTime() {
// 	let lockTime = Settings.System.getInt(
// 		context.getContentResolver(),
// 		Settings.System.SCREEN_OFF_TIMEOUT
// 	)
// 	if (null == lockTime || '' === lockTime || 'undefined' === lockTime) {
// 		return 8000
// 	}
// 	return lockTime / 2
// }
