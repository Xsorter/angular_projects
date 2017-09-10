'use strict'

angular.module('vacancyDetail').
	component('vacancyDetail', {
		templateUrl: 'vacancy-full/vacancy.template.html',
		controller: ['$http', '$routeParams', 
			function VacancyDetailController($http, $routeParams){
				var self = this;

				$http.get('json/' + $routeParams.id + '.json').then(function(response){
					self.vacancy = response.data;
					console.log(response.data);
				});
			}
		]
	});