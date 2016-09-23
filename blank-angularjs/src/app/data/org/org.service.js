(function(){
    'use strict';

    angular
        .module('app.data')
        .service('OrgService', OrgService)

    /** @ngInject */
    function OrgService($http){

        var services = {
            getOrg:getOrg
        };
        return services;

        ////

        function getOrg(callback){
            $http.get('../app/data/org/org.json').then(function(resp){
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