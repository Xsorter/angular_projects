'use strict'

angular.module('admin', []). 
    component('admin', {
        templateUrl: 'admin/admin.template.html',
        controller: function adminController (commonProp, $scope, $firebaseAuth,$firebaseArray, $firebaseObject,$firebase, $location){
            
            //UNCOMMENT that before prod!

            /*let user = firebase.auth().currentUser;     
            if(user){
                console.log(user.email);
            }else{
                $location.path('login');
            }
            $scope.commonProp = commonProp; 
            $scope.email = user.email; */
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
                    created: firebase.database.ServerValue.TIMESTAMP
                });

                console.log('added');

                $scope.vacancy = { /*null the values to clear inputs*/ 
                    title: null,
                    position: null,
                    salary: null,
                    city: null
                }

                $location.path('/');
            }
            
        }

    });