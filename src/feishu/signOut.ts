import { clickTextBtn } from '../utils/click'
// import 'core-js/es/promise'
auto.waitFor() // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation
launchApp('飞书')
// @ts-ignore
console.show()

// 设置屏幕兼容性尺寸

setScreenMetrics(1080, 2280)

clickTextBtn('工作台')
clickTextBtn('假勤')
clickTextBtn('下班打卡')
