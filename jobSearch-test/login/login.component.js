'use sctirct'

angular.module('login', []). 
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function loginController ($scope, $location, $firebaseAuth, $firebaseObject) {
            var self = this;
            $scope.username = '';
            $scope.pass = '';

            $scope.Auth = function(){
                console.log($scope.username);
                var auth = $firebaseAuth();
                auth.$signInWithEmailAndPassword($scope.username, $scope.pass).then(function(firebaseUser) {
                    $location.path = '#!/admin';
                    console.log("Signed in as:", firebaseUser.uid);
                    console.log("User arr:", firebaseUser);
                  }).catch(function(error) {
                    console.log("Authentication failed:", error);
                  });
            }
        }
    })