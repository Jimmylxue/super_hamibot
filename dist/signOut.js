(()=>{"use strict";function e(e){for(var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!click(e,i););}device.wakeUp(),device.wakeUpIfNeeded(),launchApp("飞书"),setScreenMetrics(1080,2280),e("工作台"),function(){for(var e=void 0;!e;){var i=className("android.widget.TextView").text("我的常用").findOne().bounds();i&&(e=i)}press(e.left+10,e.top+10,300)}(),sleep(3e3),click(187,1760),e("下班打卡"),sleep(1e3),home(),exit()})();