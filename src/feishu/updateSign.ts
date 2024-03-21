import { unlockScreen } from '../core/device'
import { clickText, clickTextBtn, pressText } from '../core/click'
import { sendNotify } from '../core/platform'

unlockScreen()

toastLog(`更新打卡时间脚本开始执行`)

// @ts-ignore
// console.show()

launchApp('飞书')

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)

// 点击工作台
clickTextBtn('工作台')
sleep(15000)

clickTextBtn('假勤')
sleep(3000)

clickText('更新打卡')

/**
 * 这里是就需要双击 否则点击失败
 */
pressText('确定')
pressText('确定')
pressText('确定')
pressText('确定')

sleep(10000)

home()
sendNotify('操作成功')
exit()
