(function() {
    'use strict';

    angular
        .module('app.data')
        .controller('DataCtrl', DataCtrl)

    /** @ngInject */
    function DataCtrl($state, $timeout) {
        var vm = this;
        vm.menu = null;
        vm.menus = [{
            title: '单位信息',
            state: 'data.org',
            icon: 'ion-ios-list'
        }, {
            title: '车辆信息',
            state: 'data.car',
            icon: 'ion-model-s'
        }, {
            title: '路线管理',
            state: 'data.line',
            icon: 'ion-shuffle'
        }, {
            title: '区域管理',
            state: 'data.area',
            icon: 'ion-map'
        }, {
            title: '退、废车登记',
            state: 'data.sign',
            icon: 'ion-compose'
        }];


        ////
        vm.clickMenu = clickMenu;
        ////

        init();

        function init() {

            $timeout(function() {

                var crt = $state.$current.self.name;

                //if (!$state.includes('data.*')) {

                    var m = getMenuByState(crt);
                    if(!m){
                        m =  vm.menus[0];
                    }
                    clickMenu(m);
                //}
            });

        }

        function getMenuByState(state){
            for(var i=0;i<vm.menus.length;i++){
                var m = vm.menus[i];
                if(m.state == state){
                    return m;
                }
            }
        }

        function clickMenu(m) {
            vm.menu = m;
            if($state.$current.self.name != m.state){
                $state.go(m.state);
            }
        }

    }

}());