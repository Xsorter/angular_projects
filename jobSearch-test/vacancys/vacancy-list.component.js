'use strict'

angular
	.module('vacancyList')
	.component('vacancyList', {
		templateUrl: "vacancys/vacancy-list.html",
		controller: function VacancyListController () {
			this.name = "Xsorter";

			this.vacancys = [
				{
					company: "Food ltd.",
					position: "Cook",
					salary: "500 usd",
					city: "Kiyv",
					added: 2
				},
				{
					company: "Product Technology ltd",
					position: "Waitress",
					salary: "300 usd",
					city: "Kiyv",
					added: 4
				},
				{
					company: "IT company",
					position: "Software Engineer",
					salary: "1000 usd",
					city: "Kiyv",
					added: 10
				},
				{
					company: "Guard & co",
					position: "Guardian",
					salary: "200 usd",
					city: "Kiyv",
					added: 7
				}
			]

			this.orderProp = 'added';



		}
	});