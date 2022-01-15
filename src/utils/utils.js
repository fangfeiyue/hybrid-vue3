export const getImgPath = (name) => {
	return new URL('../assets/img/' + name, import.meta.url).href;
};

export const formatePrice = (price) => {
	price = +price;
	if (isNaN(price)) price = 0.0;
	return price.toFixed(2);
};
