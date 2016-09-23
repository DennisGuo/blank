(function() {
    'use strict';

    angular
        .module('app.data')
        .service('CarService', CarService)

    /** @ngInject */
    function CarService($http) {

        var services = {
            getCars: getCars,
            getCarsBySignType:getCarsBySignType
        };

        return services;

        ////

        function getCars(callback) {
            $http.get('../app/data/car/car.json').then(function(resp) {
                if (resp.data) {
                    callback(resp.data);
                } else {
                    calblack(null);
                }
            }, function(err) {
                callback(null);
            });
        }

        function getCarsBySignType(type,callback) {
            $http.get('../app/data/sign/sign.'+type+'.json').then(function(resp) {
                if (resp.data) {
                    callback(resp.data);
                } else {
                    calblack(null);
                }
            }, function(err) {
                callback(null);
            });
        }
    }

}());