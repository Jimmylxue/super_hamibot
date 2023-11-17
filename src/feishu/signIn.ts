import { clickTextBtn } from '../utils/click'
// @ts-ignore
auto.waitFor() // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation
// @ts-ignore
launchApp('飞书')
// @ts-ignore
console.show()

// 设置屏幕兼容性尺寸

// @ts-ignore
setScreenMetrics(1080, 2280)

// 点击工作台
clickTextBtn('工作台')
clickTextBtn('假勤')
clickTextBtn('上班打卡')
