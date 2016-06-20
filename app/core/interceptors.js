import * as api from './api';

export default function(localStorageService) {
	"ngInject";

	let authToken = 'auth.token';

	function interceptReq(config) {
		if(api.isCall(config.url) && localStorageService.get(authToken)) {
			// force auth token
			// config.headers['authorization'] = localStorageService.get(authToken);
		}
		return config;
	}

	function interceptResSuccess(res) {
		return res
	}

	function interceptResError(res) {
		if(api.isCall(res.config.url) && res.status === 401) {
			// not logged in
		}
		return Promise.reject(res);
	}

	api.prod.interceptors.request.use(interceptReq);
	api.prod.interceptors.response.use(interceptResSuccess, interceptResError);

	return {
		request: interceptReq,
		response: interceptResSuccess
	};
};