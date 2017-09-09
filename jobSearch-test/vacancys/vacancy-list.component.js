'use strict'

angular
	.module('vacancyList')
	.component('vacancyList', {
		templateUrl: "vacancys/vacancy-list.html",
		controller: function VacancyListController () {
			this.name = "Xsorter";

			this.vacancys = [
				{
					position: "Повар",
					salary: "10 000 грн",
					city: "Киев",
					added: 2
				},
				{
					position: "Швея",
					salary: "7 000 грн",
					city: "Киев",
					added: 4
				},
				{
					position: "Программист",
					salary: "20 000 грн",
					city: "Киев",
					added: 10
				},
				{
					position: "Охранник",
					salary: "6 000 грн",
					city: "Киев",
					added: 7
				}
			]



		}
	});