'use strict'

angular.module('app')
    .controller('cardCtrl', function(cardFactory){

        this.editing = false;
        this.editingCard = null;

        this.removeCard = function(card){
            cardFactory.removeCard(card);
        }

        this.editCard = function(card){
            this.editing = true;
            this.editingCard = angular.copy(card);
        }

        this.updateCard = function(){
            cardFactory.updateCard(this.editingCard);
            this.editingCard = null;
            this.editing = false;
        }
    })