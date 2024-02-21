declare function launchApp(appName: string) {}

declare const auto = {
	waitFor() {},
}

declare function setScreenMetrics(size1: number, size2: number) {}

declare function click(text: string, count: number): boolean {}

declare const device = {
	wakeUpIfNeeded() {},
	getAndroidId() {},
	width: number,
	height: number,
}

/**
 * 退出调试
 */
declare function exit() {}

/**
 * 回到首页
 */
declare function home() {}

/**
 * 输出调试信息
 */
declare function toastLog(msg: string) {}

declare const storages = {
	create(key: string): any {},
}

declare function gesture(time: number, x: number[], y: number[]) {}

declare function sleep(time: number) {}

declare function log(text: string, arg?: string) {}

declare const http = {
	post(url: string, params: any) {},
}

declare const threads: any

declare function importClass(params: any) {}

declare const android: any
declare const context: any
declare const Settings: any
