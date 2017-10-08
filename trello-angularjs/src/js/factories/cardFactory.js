'use strict'

angular.module('app')
    .factory('cardFactory', function(){
        let service = {};
        
        let cards = [
            {
                id: 1,
                description: 'Buy milk',
                list_id: 1
            },
            {
                id: 2,
                description: 'Go for a walk',
                list_id: 2
            },
            {
                id: 3,
                description: 'Go to the gym',
                list_id: 3
            },
            {
                id: 4,
                description: 'Read news',
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

        service.removeCard = function(card){
            let index = cards.findIndex(function(o){
                return o.id === card.id;
            });
            if (index !== -1) cards.splice(index, 1);
        }

        service.updateCard = function(newCard){
            let card = _.findWhere(cards, {id: newCard.id});
            card.description = newCard.description;
            card.list_id = newCard.list_id;
        }

        return service;
    })