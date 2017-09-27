'use strict'

angular.module('headerApp').
	component('headerApp', {
		templateUrl: 'header/header.template.html',
		controller: function HeaderController($q, $scope, $timeout, $firebaseAuth, $firebaseObject, $firebase, $routeParams, $location) {
			var self = this;
			$scope.signLink = '';
			$scope.signLinkA = '';

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
				  $scope.signLink = user.email+' (admin dashboard)';
				  $scope.signLinkA = '#!/admin';
				} else {
				  $scope.signLink = 'sign in';
				  $scope.signLinkA = '#!/login';
				}
				return $timeout(20);
			});

		}
	});