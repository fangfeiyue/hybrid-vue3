export function getImgPath(name) {
	return new URL('../assets/img/' + name, import.meta.url).href;
}

export function formatePrice(price) {
	price = +price;
	if (isNaN(price)) price = 0.0;
	return price.toFixed(2);
}

export function fillZero(val) {
	val = Number(val);
	if (isNaN(val)) val = 0;
	return val < 9 ? '0' + val : val;
}
