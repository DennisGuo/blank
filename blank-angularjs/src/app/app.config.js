(function() {
    'use strict';

    angular
        .module('app')
        .config(configFn);

    /** @ngInject */
    function configFn($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: "app/login/login.html",
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .state('port', {
                url: '/',
                templateUrl: 'app/port/port.html',
                controller: 'PortCtrl',
                controllerAs: 'vm'
            })
            ;


    }
}());