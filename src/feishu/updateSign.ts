import { unlockScreen } from '../core/device'
import { clickText, clickTextBtn } from '../core/click'

unlockScreen()

toastLog(`更新打卡时间脚本开始执行`)

// @ts-ignore
console.show()

launchApp('飞书')

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)

// 点击工作台
clickTextBtn('工作台')
clickTextBtn('假勤')

clickText('更新打卡')
