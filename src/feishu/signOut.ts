import { unlockScreen } from '../core/device'
import { clickTextBtn } from '../core/click'

unlockScreen()

auto.waitFor() // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation
launchApp('飞书')

/** 获取 0 - 5 的随机数 */
const randomNumber = Math.floor(Math.random() * 6)

toastLog(`脚本开始执行，随机睡眠${randomNumber}分钟`)

/**
 * 随机睡眠 0 - 5 分钟
 */
sleep(1000 * 60 * randomNumber)

// @ts-ignore
console.show()

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)

// 点击工作台
clickTextBtn('工作台')
clickTextBtn('假勤')
clickTextBtn('下班打卡')
sleep(1000)
toastLog('脚本执行完毕，退出')
home()
exit()

//
