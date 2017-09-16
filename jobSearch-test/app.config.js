'use strict'

angular.module('jobsApp')
	.config([
		'$locationProvider',
		'$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider
			.when('/vacancy', {
				template: '<vacancy-list></vacancy-list>'
			}).
			when('/vacancy/:id', {
				template: '<vacancy-detail></vacancy-detail>'
			}).
			when('/admin', {
				template: '<admin></admin>'
			}).
			when('/login', {
				template: '<login></login>'
			}).
			otherwise('/vacancy')
		}
	])