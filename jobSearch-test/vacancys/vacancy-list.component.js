'use strict'

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
				  console.log(user)
				} else {
				  self.signedOut = true;		
				  console.log('Not signed')
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
					console.log(self.result);
					console.log($scope.res);
					$scope.isLoaded = true;
					return $timeout(20); /*set timeout to get promise*/ 
			})
			
			
			
		
			
			console.log($scope.isLoaded);
			/* self.vacancys = Vac.query();  */
			
		}]
	});

	