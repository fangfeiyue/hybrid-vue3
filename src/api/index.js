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
