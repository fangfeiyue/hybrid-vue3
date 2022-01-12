import axios from 'axios';
import config from '../config/index';

const TOKEN_INVALID = 'Token认证失败，请重新登录';
const NETWORK_ERROR = '网络请求异常，请稍后重试';

const service = axios.create({
	baseURL: config.baseApi,
	timeout: 5000
});

service.interceptors.request.use((req) => {
	const headers = req.headers;
	// const { token = '' } = storage.getItem('userInfo') || {};
	// if (!headers.Authorization) headers.Authorization = 'Bearer ' + token;
	if (req.params) {
		req.params.token = config.token;
	} else {
		req.params = { token: config.token };
	}
	return req;
});

service.interceptors.response.use((res) => {
	const { state, data, msg } = res.data;

	if (state == 0) {
		return data;
	} else if (code === 50001) {
		setTimeout(() => {
			router.push('/login');
		}, 1500);
		return Promise.reject(TOKEN_INVALID);
	} else {
		console.error(msg || NETWORK_ERROR);
		return Promise.reject(msg || NETWORK_ERROR);
	}
});

function request(options) {
	if (options.method === 'get') options.params = options.data;
	let isMock = config.mock;
	if (typeof options.mock !== 'undefined') {
		isMock = options.mock;
	}
	if (config.env === 'prod') {
		service.defaults.baseURL = config.baseApi;
	} else {
		service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
	}

	return service(options);
}

[ 'get', 'post' ].forEach((method) => {
	request[method] = (url, data, options) => {
		return request({
			url,
			data,
			method,
			...options
		});
	};
});

export default request;
