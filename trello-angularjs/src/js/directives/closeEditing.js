'use strict'

angular.module('app')
    .directive('closeEditing', function(){
        const keys = {
            ESC: 27
        }
        return{
            scope: {
                isEditing: '='
            },
            link: function(scope, elem, attrs){
                elem.on('keyup', function(el){
                    if(_.isEqual(el.keyCode, keys.ESC)){
                        scope.isEditing = false;
                        scope.$apply();
                    }
                })

                console.log('dirtective', scope.isEditing)
            }
        }
    });