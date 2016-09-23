(function(){
    'use strict';

    angular
        .module('app.data')
        .service('GeoService', GeoService)

    /** @ngInject */
    function GeoService($http){

        var services = {
            getLines:getLines,
            getAreas:getAreas
        };
        return services;

        /////

        function getLines(callback){
            $http.get('../app/data/line/line.json').then(function(resp){
                if(resp.data){
                    callback(resp.data);
                }else{
                    calblack(null);
                }
            },function(err){
                callback(null);
            });
        }

        function getAreas(callback){
            $http.get('../app/data/area/area.json').then(function(resp){
                if(resp.data){
                    callback(resp.data);
                }else{
                    calblack(null);
                }
            },function(err){
                callback(null);
            });
        }

        
    }

}());