(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('InspectionCtrl', InspectionCtrl)

    /** @ngInject */
    function InspectionCtrl($scope, $state, $timeout) {
        var vm = this;
        vm.menu = null;
        vm.menus = [{
            title: '概况信息',
            state: 'inspection.dashboard',
            icon: 'ion-calendar'
        }, {
            title: '定位督查',
            state: 'inspection.location',
            icon: 'ion-flag'
        }, {
            title: '车貌督查',
            state: 'inspection.surface',
            icon: 'ion-social-instagram'
        }, {
            title: '使用督查',
            state: 'inspection.useage',
            icon: 'ion-ios-speedometer'
        }, {
            title: '安全管理',
            state: 'inspection.safe',
            icon: 'ion-heart'
        }, {
            title: '现场督查',
            state: 'inspection.video',
            icon: 'ion-videocamera'
        }, {
            title: '督查报告',
            state: 'inspection.report',
            icon: 'ion-document-text'
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
                if (!m) {
                    m = vm.menus[0];
                }
                clickMenu(m);
                //}
            });

        }

        function getMenuByState(state) {
            for (var i = 0; i < vm.menus.length; i++) {
                var m = vm.menus[i];
                if (m.state == state) {
                    return m;
                }
            }
        }

        function clickMenu(m) {
            vm.menu = m;
            if ($state.$current.self.name != m.state) {
                $state.go(m.state);
            }
        }

    }

}());