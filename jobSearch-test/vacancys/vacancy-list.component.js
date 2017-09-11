'use strict'

angular
	.module('vacancyList')
	.component('vacancyList', {
		templateUrl: "vacancys/vacancy-list.html",
		controller: ['Vac', function VacancyListController (Vac) {
			var self = this;
			self.name = "Xsorter";
			self.orderProp = 'added';

			
			self.vacancys = Vac.query();
				
		
		}]
	});