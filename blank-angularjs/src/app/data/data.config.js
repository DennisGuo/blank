(function(){
    'use strict';

    angular
        .module('app.data')
        .config(appDataConfig)

    /** @ngInject */
    function appDataConfig($stateProvider){
        $stateProvider.state('data', {
                url: '/data',
                templateUrl: 'app/data/data.html',
                controller:'DataCtrl',
                controllerAs:'vm'
            })
            .state('data.org', {
                url: '/org',
                views: {
                    'content': {
                        templateUrl: 'app/data/org/org.html',
                        controller: 'OrgCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('data.car', {
                url: '/car',
                views: {
                    'content': {
                        templateUrl: 'app/data/car/car.html',
                        controller: 'CarCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('data.line', {
                url: '/line',
                views: {
                    'content': {
                        templateUrl: 'app/data/line/line.html',
                        controller: 'LineCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('data.area', {
                url: '/area',
                views: {
                    'content': {
                        templateUrl: 'app/data/area/area.html',
                        controller: 'AreaCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('data.sign', {
                url: '/sign',
                views: {
                    'content': {
                        templateUrl: 'app/data/sign/sign.html',
                        controller: 'SignCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            ;
    }

}());