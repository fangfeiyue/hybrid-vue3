import request from '../utils/request';
export function fetchSwiper(params) {
	return request({
		url: '/swiper',
		method: 'get',
		data: params
	});
}

export function fetchActivity(params) {
	return request({
		url: '/activitys',
		method: 'get',
		data: params
	});
}

export function fetchSeconds(params) {
	return request({
		url: '/seconds',
		method: 'get',
		data: params
	});
}

export function fetchGoods(params) {
	return request({
		url: '/goods',
		method: 'get',
		data: params
	});
}
