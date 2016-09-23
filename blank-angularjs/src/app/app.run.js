(function() {
    'use strict';

    angular
        .module('app')
        .run(runFn);

    /** @ngInject */
    function runFn($rootScope, $cookies,$state,$timeout, Logger, UserService) {

        Logger.i('开始运行应用');

        $rootScope.user = null;
        $rootScope.site = {
            title: '公安边防部队北斗应用平台软件'
        };

        ////
        $rootScope.showHome = showHome;

        /////
        $rootScope.$on('$stateChangeStart',callbackStateChange);


        ////

        init();

        function init() {
            var token = $cookies.get('token');
            if (token) {
                UserService.getByToken(token, function(u) {
                    if(u){
                        $rootScope.user = u;
                    }else{
                        redirect('login');
                    }
                });
            }else{
               redirect('login');
            }
        }

        function redirect(state){
            $timeout(function(){
                $state.go(state);
            });
        }

        function showHome(){
            return window.location.hash != '#/';
        }

        function callbackStateChange(event, toState, toParams, fromState, fromParams, options){
            
           if(toState != 'login' && !$rootScope.user){
                redirect('login');
           } 

        }

    }

}());