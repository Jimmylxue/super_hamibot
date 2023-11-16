/**
 * 该函数可以点击大部分包含文字的按钮。例如微信主界面下方的"微信", "联系人", "发现", "我"的按钮。
 * 但是非按钮点击是会不生效的
 * @param {*} text 按钮文本
 * @param {*} count 点击第几个出现文本的按钮 默认1
 */
export function clickTextBtn(text: string, count: number = 0) {
	// @ts-ignore
	while (!click(text, count));
}
