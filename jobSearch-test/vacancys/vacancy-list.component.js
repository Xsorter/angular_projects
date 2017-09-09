'use strict'

angular
	.module('vacancyList')
	.component('vacancyList', {
		templateUrl: "vacancys/vacancy-list.html",
		controller: ['$http', function VacancyListController ($http) {
			var self = this;
			self.name = "Xsorter";
			self.orderProp = 'added';

			$http.get('json/vacancies.json').then(function(response){
				self.vacancys = response.data;
				console.log(response.data);
			})	
		}]
	});