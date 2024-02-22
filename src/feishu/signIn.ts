import { unlockScreen } from '../core/device'
import { clickTextBtn } from '../core/click'
import { sendNotify } from '../core/platform'

unlockScreen()

/** 获取 0 - 3 的随机数 */
const randomNumber = Math.floor(Math.random() * 4)

toastLog(`脚本开始执行，随机睡眠${randomNumber}分钟`)

/**
 * 随机睡眠 0 - 3 分钟
 */
sleep(1000 * 60 * randomNumber)

// @ts-ignore
console.show()

launchApp('飞书')

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)

// 点击工作台
clickTextBtn('工作台')
clickTextBtn('假勤')
clickTextBtn('上班打卡')

sleep(1000)
home()
sendNotify('操作成功')
exit()
