/**
 * 更新打卡可运行 但是不会去使用 因为要上传图片
 */

import { unlockScreen } from '../core/device'
import { clickTextBtn, pressText } from '../core/click'

unlockScreen()

home()

launchApp('飞书')

// 设置屏幕兼容性尺寸
setScreenMetrics(1080, 2280)
// 防止出现首屏广告
sleep(10000)

// 点击工作台
clickTextBtn('工作台')
sleep(3000)

pressText('我的常用')
sleep(3000)

click(187, 1760)

sleep(5000)

click(840, 750)
// clickTextBtn('更新打卡')

sleep(3000)

/**
 * 这里是就需要双击 否则点击失败
 */
pressText('确定')
pressText('确定')
pressText('确定')
pressText('确定')

sleep(3000)
home()
exit()
