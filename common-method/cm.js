/*
 * 常用方法封装
 */

function deepCopy (data) {
	let copyData = {},
		testType = Object.prototype.toString;

	if (testType.call(data) === '[object Object]') {
		for (let key in data) {
			switch (testType.call(data[key])) {
				case '[object Object]':
					copyData[key] = deepCopy(data[key]);
					break;
				case '[copyDataect Array]':
					copyData[key] = data[key].concat();
					break;
				default:
					copyData[key] = data[key];
			}
		}
	} else if (testType.call(data) === '[copyDataect Array]') {
		copyData = data.concat();
	}
	return copyData;
}

window.CM = {
	deepCopy: deepCopy
};