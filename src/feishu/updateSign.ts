import { unlockScreen } from '../core/device'
import { clickText, clickTextBtn, pressText } from '../core/click'

unlockScreen()

toastLog(`更新打卡时间脚本开始执行`)

// @ts-ignore
// console.show()

launchApp('飞书')

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)

clickTextBtn('工作台')

pressText('我的常用')

sleep(3000)

click(187, 1760)

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
exit()
