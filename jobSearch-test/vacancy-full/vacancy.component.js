'use strict'

angular.module('vacancyDetail').
	component('vacancyDetail', {
		templateUrl: 'vacancy-full/vacancy.template.html',
		controller: ['Vac','$scope', '$firebaseAuth','$timeout' ,'$firebaseArray', '$firebaseObject','$firebase', '$routeParams', '$location',
			function VacancyDetailController(Vac,$q, $scope, $timeout, $firebaseAuth,$firebaseArray, $firebaseObject, $firebase, $routeParams, $location){
				let self = this;
				let routeParamceSliced = $routeParams.url().split('/').slice(2,3).join();
				self.resFull = '';

				let rootRef = firebase.database().ref(); /*firebase request to database*/ 
				let storesRef = rootRef.child('app/vacancies/'+ $routeParams.url().split('/').slice(2,3).join());
				storesRef.once('value')
					.then(function (snap) {
						self.resFull = snap.val();
						self.resultFull = Object.values(self.resFull); /*make an array for comfortable ng-repeat*/
						return $timeout(10); /*set timeout to get promise*/ 
				}); 

			}
		]
	});