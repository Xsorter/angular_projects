'use strict'

<<<<<<< HEAD
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
=======
let appVacancies = angular.module('vacancyList');

appVacancies
	.component('vacancyList', {
		templateUrl: "vacancys/vacancy-list.html",
		controller: ['Vac','$scope', '$firebaseAuth','$timeout' ,'$firebaseArray', '$firebaseObject','$firebase', '$routeParams', '$location', function VacancyListController (Vac,$q, $scope, $timeout, $firebaseAuth,$firebaseArray, $firebaseObject, $firebase, $routeParams, $location) {
			let self = this;
			$scope.isLoaded = false;
			self.orderProp = '-created';
			$scope.res = '';

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
				  self.name = user.email;
				} else {
				  self.signedOut = true;		
				}
				return $timeout(20);
			});
			

			let rootRef = firebase.database().ref(); /*firebase request to database*/ 
			rootRef.once('value')
				.then(function (snap) {
					$scope.res = snap.val().app.vacancies;

					angular.forEach(snap.val(), function(index) {
						self.result = Object.values(index.vacancies); /*make an array for comfortable ng-repeat*/	
					})
					$scope.isLoaded = true;
					return $timeout(20); /*set timeout to get promise*/ 
			})
			
		}]
	});

	
>>>>>>> gh-pages
