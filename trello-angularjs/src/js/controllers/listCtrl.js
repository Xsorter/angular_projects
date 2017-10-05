'use strict'

angular.module('app')
    .controller('listCtrl', function(listFactory, cardFactory){
        this.removeList = function(list){
            listFactory.removeList(list);
        };

        this.getCards = function(list) {
            return cardFactory.getCards(list)
        };
            
        this.createCard = function(list){
            cardFactory.createCardList(list, this.cardDescription)
            this.cardDescription = null;
        };
    })