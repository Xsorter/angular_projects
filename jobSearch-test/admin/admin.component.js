'use strict'

angular.module('admin', []). 
    component('admin', {
        templateUrl: 'admin/admin.template.html',
        controller: function adminController (commonProp, $scope, $firebaseAuth,$firebaseArray, $firebaseObject,$firebase, $location){
            
            //UNCOMMENT that before prod!

            /* let user = firebase.auth().currentUser;     
            if(user){
                console.log(user.email);
            }else{
                $location.path('login');
            }

            $scope.commonProp = commonProp; 
            $scope.email = user.email; */

            $scope.AddVacancy = function(){
                var rootRef = firebase.database().ref();
                var storesRef = rootRef.child('app/vacancies');
                var newStoreRef = storesRef.push();
                newStoreRef.set({
                    title: $scope.vacancy.title,
                    position: $scope.vacancy.position,
                    salary : $scope.vacancy.salary,
                    city : $scope.vacancy.city
                });

                rootRef.once('value') /*for test only, need to be deprecated!!*/ 
                    .then(function (snap) {
                        let arrVal = snap.val().app.vacancies;    
                        $scope.fireArr = Object.values(arrVal);
                        console.log('snap.val()', $scope.fireArr);
                });

                console.log('added');

                $scope.vacancy = { /*null the values to clear inputs*/ 
                    title: null,
                    position: null,
                    salary: null,
                    city: null
                }
            }
            
        }

    });