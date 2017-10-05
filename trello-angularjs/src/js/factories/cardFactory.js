'use strict'

angular.module('app')
    .factory('cardFactory', function(){
        let service = {};
        
        let cards = [
            {
                id: 1,
                description: 'description1',
                list_id: 1
            },
            {
                id: 2,
                description: 'description2',
                list_id: 2
            },
            {
                id: 3,
                description: 'description3',
                list_id: 3
            },
            {
                id: 4,
                description: 'description4',
                list_id: 2
            }
        ]

        service.getCards = function(list){
            return _.filter(cards, {list_id : list.id});
        }

        service.createCardList = function(list, cardDescription){
            cards.push({
                id: _.uniqueId('card_'),
                description: cardDescription,
                list_id: list.id
            })
        }

        return service;
    })