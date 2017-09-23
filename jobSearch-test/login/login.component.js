'use sctirct'

let app = angular.module('login', []);

 
app.component('login', {
        templateUrl: 'login/login.template.html',
        controller: function loginController ($scope, commonProp, $location, $firebaseAuth, $firebaseObject) {
            var self = this;

        
            $scope.commonProp = commonProp;
            $scope.username = '';
            $scope.pass = '';
            $scope.error = '';
            $scope.success = '';

            $scope.url = config.databaseURL;
            
            console.log(config.databaseURL);
            
            $scope.Auth = function(){
                var auth = $firebaseAuth();
                auth.$signInWithEmailAndPassword($scope.username, $scope.pass)
                    .then(function(firebaseUser) {
                        $scope.success = 'Success login. Loading...';
                        $location.path('admin');
                        console.log("Signed in as:", firebaseUser.uid);
                    })
                    .catch(function(error) {
                        $scope.error = error.message;          
                        console.log("Authentication failed:", error);
                    });
            }
        }
    })

app.factory('commonProp', function(){
    return {
        isLogged: false,
        username: null
    }
})    