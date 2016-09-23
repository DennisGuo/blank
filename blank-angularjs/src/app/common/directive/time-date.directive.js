(function() {
    'use strict';

    angular
        .module('app')
        .directive('timeDate', DateTime);



    function DateTime() {

        return {
            bindToController: true,
            template: "{{vm.time|date:'yyyy年M月d日'}} &nbsp; {{vm.week}}",
            controller: TimeDateController,
            controllerAs: 'vm',
            restrict: 'AE',
            scope: {}
        }

        /** @ngInject */
        function TimeDateController($timeout) {
            var vm = this;
            vm.week = '';
            vm.time = new Date();
            init();

            function init() {
                renderWeek();
                $timeout(function(){
                    vm.time = new Date();
                    renderWeek();
                },24*60*60*1000);
            }

            function renderWeek(){
                var week = vm.time.getDay();
                vm.week =
                    week == 0 ? '星期日' :
                    week == 1 ? '星期一' :
                    week == 2 ? '星期二' :
                    week == 3 ? '星期三' :
                    week == 4 ? '星期四' :
                    week == 5 ? '星期五' :
                    week == 6 ? '星期六' : '';
            }
        }

    }

}());