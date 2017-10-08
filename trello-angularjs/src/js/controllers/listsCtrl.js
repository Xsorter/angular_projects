'use strict'

angular.module('app')
    .controller( 'listsCtrl', ['listFactory', function(listFactory){
        console.log('test');
        this.lists = listFactory.getLists();

        this.addList = function() {
            listFactory.addList(this.listName);
            this.listName = null;
        }
    }]);