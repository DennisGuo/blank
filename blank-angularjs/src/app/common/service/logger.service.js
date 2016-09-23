(function(){
    'use strict';

    angular
        .module('app')
        .service('Logger', Logger)

    /** @ngInject */
    function Logger(){

        var service = {
            i:info
        };

        return service;

        //////

        function info(msg){
            try{
                console.log(msg);
            }catch(e){}
        }
    }

}());