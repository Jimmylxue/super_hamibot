import { clickTextBtn } from '../utils/click'
auto.waitFor() // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation
launchApp('飞书')
// @ts-ignore
console.show()

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)

// 点击工作台
clickTextBtn('工作台')
clickTextBtn('假勤')
clickTextBtn('上班打卡')
