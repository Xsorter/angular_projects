'use strict'

angular.module('vacancyDetail').
	component('vacancyDetail', {
		template: 'Temporary empty, but id of vacancy is {{$ctrl.id}}',
		controller: ['$routeParams', 
			function VacancyDetailController($routeParams){
				this.id = $routeParams.id;
			}
		]
	});