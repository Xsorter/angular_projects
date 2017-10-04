'use strict'

angular.module('app')
    .controller( 'listsCtrl', ['listFactory', function(listFactory){
        console.log('test');
        this.lists = listFactory.getLists();
    }]);