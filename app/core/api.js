import axios from 'axios';

let mockApi = '0.0.0.0:7001/api';
let devApi = '/api';
let prodApi = '/api';
let responseType = 'json';

module.exports.prod = axios.create({
	baseURL: __DEV__ ? devApi : prodApi,
  responseType: responseType
});

module.exports.mock = axios.create({
	baseURL: mockApi,
  responseType: responseType
});

/**
 * prove that api call is actually an "api" call
 * @param url
 * @returns {boolean}
 */
module.exports.isCall = function(url) {
	return url.indexOf(prodApi) > -1;
};