(()=>{"use strict";function e(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!click(e,t););}function t(e){for(var t=void 0;!t;){var n=className("android.widget.TextView").text(e).findOne().bounds();n&&(t=n)}press(t.left+10,t.top+10,300)}function n(e){var t=new Date,n=t.getFullYear(),o=String(t.getMonth()+1),s=t.getDate(),a=t.getHours(),c=t.getMinutes(),i=t.getSeconds();switch(+o<10&&(o="0"+o),s<10&&(s="0"+s),a<10&&(a="0"+a),c<10&&(c="0"+c),i<10&&(i="0"+i),e){case 1:return n+"/"+o+"/"+s;case 2:return n+"-"+o+"-"+s;default:return n+"/"+o+"/"+s+" "+a+":"+c+":"+i}}device.wakeUp(),device.wakeUpIfNeeded(),toastLog("更新打卡时间脚本开始执行"),launchApp("飞书"),setScreenMetrics(1080,2280),e("工作台"),sleep(15e3),e("假勤"),sleep(3e3),function(e){for(var t=void 0;!t;){var n=className("android.widget.TextView").text("更新打卡").findOne().bounds();n&&(t=n)}click(t.left+10,t.top+10)}(),t("确定"),t("确定"),t("确定"),t("确定"),sleep(1e4),home(),function(e){toastLog("发送通知： ");var t="https://qmsg.zendee.cn/send/3ecc95c53d02420525bf9714aaf7d8d1";console.log("url",t),http.post(t,{msg:n(1)+" 打卡结果\n操作成功"})}(),exit()})();