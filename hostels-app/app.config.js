'use strict'

angular.module('app')
	.config([
		'$locationProvider',
		'$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');
			
			$routeProvider
			.when('/admin', {
				template: 'admin dashboard'
			}).
			when('/login', {
				template: 'login page'
			}).
			when('/',{
				template: 'main page'		
			}).
			otherwise('/')
		}
	])