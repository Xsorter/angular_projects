'use strict'

angular.module('app')
    .factory('listFactory', function(){
        let service = {}

        let lists = [
            {
                id:1,
                listName: 'ToDo'
            },
            {
                id:2,
                listName: 'Doing'
            },
            {
                id:3,
                listName: 'Done'
            },
        ];

        service.getLists = function(){
            return lists;
        };

        return service;
    });