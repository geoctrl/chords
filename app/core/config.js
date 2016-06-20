export default function($urlRouterProvider, $locationProvider, localStorageServiceProvider, $httpProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
	localStorageServiceProvider.setStorageType('localStorage');
	$httpProvider.interceptors.push('interceptors')

};
