'use strict'

angular.module('admin', []). 
    component('admin', {
        templateUrl: 'admin/admin.template.html',
        controller: function adminController (commonProp, $scope, $timeout, $firebaseAuth,$firebaseArray, $firebaseObject,$firebase, $location){
            let self = this;
            $scope.email = '';

            firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
                  $scope.email = user.email;
				} else {
                  $location.path('login');
                }
                return $timeout(20);
			});


            $scope.vacancy = {
                imgUrl: 'https://'
            }

            $scope.AddVacancy = function(){
                var rootRef = firebase.database().ref();
                var storesRef = rootRef.child('app/vacancies');
                var newStoreRef = storesRef.push();
                var key = newStoreRef.key;
                newStoreRef.set({
                    id: key,
                    title: $scope.vacancy.title,
                    position: $scope.vacancy.position,
                    salary : $scope.vacancy.salary,
                    city : $scope.vacancy.city,
                    imageUrl: $scope.vacancy.imgUrl,
                    created: firebase.database.ServerValue.TIMESTAMP,
                    email : $scope.vacancy.email,
                    phone: $scope.vacancy.phone,
                    description: $scope.vacancy.description
                });

                /*null the values to clear inputs*/     
                $scope.vacancy = { 
                    title: null,
                    position: null,
                    salary: null,
                    city: null,
                    imageUrl: null,
                    email: null,
                    phone: null,
                    description: null
                }
            }
        }
    });