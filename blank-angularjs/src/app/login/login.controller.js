(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl)

    /** @ngInject */
    function LoginCtrl($scope, $rootScope, $state, $timeout, $cookies, UserService) {
        var vm = this;
        vm.username = null;
        vm.password = null;
        vm.remember = false;
        vm.loginErr = null;
        vm.formOut = false;
        ////
        vm.login = login;
        vm.loginSingle = loginSingle;
        /////
        init();

        function init() {
            $rootScope.user = null;
            $cookies.remove('token');
            var unm = $cookies.get('unm');
            vm.username = unm;
            vm.remember = !!unm;
        }

        function login() {

            if (!vm.username) {
                showErr("请输入正确的用户名");
                return;
            }
            if (!vm.password) {
                showErr("请输入正确的密码");
                return;
            }

            //todo：使用服务验证用户
            UserService.getValidUser(vm.username, vm.password, callbackGetUser);
        }

        function loginSingle(){
            callbackGetUser(UserService.users[0]);
        }

        function callbackGetUser(u) {
            if (u) {
                $rootScope.user = u;

                dealWithCookies(u);

                vm.loginErr = null;
                vm.formOut = true;
                $timeout(function() {
                    //vm.formShow = false;
                    $state.go('port');
                }, 600);
            } else {
                showErr("用户名或密码有误");
            }
        }

        function dealWithCookies(u) {
            $cookies.put('token', u.username, {
                expires: new Date(new Date().getTime() + 300 * 60 * 1000)
            });
            if (vm.remember) {
                $cookies.put('unm', u.username, {
                    expires: new Date(new Date().getTime() + 15*24*60 * 60 * 1000)
                });
            } else {
                $cookies.remove('unm');
            }
        }

        function showErr(msg) {
            vm.loginErr = null;
            $timeout(function() {
                vm.loginErr = msg;
            }, 100);
        }

    }

}());