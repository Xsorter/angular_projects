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

        service.addList = function(listName){
            lists.push({
                id: _.uniqueId('list_'),
                listName: listName
            })
        }

        service.removeList = function(list){
            let index = lists.findIndex(function(o){
                return o.id === list.id;
            });
            if (index !== -1) lists.splice(index, 1);
        }

        return service;
    });