(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('timeTick', timeTick);



    function timeTick() {

         return {
            bindToController: true,
            template:'{{vm.time|date:"HH"}} <span ng-show="vm.tick" style="width:12px;display:inline-block;text-align:center;">:</span> <span ng-show="!vm.tick" style="width:12px;display:inline-block;"></span> {{vm.time|date:"mm"}}',
            controller: TimeTickController,
            controllerAs: 'vm',
            restrict: 'AE',
            scope: {},
        }

         /** @ngInject */
        function TimeTickController($interval){
            var vm = this;
            vm.time = new Date();
            vm.tick = true;
            
            init();

            function init(){

                $interval(function(){
                    vm.tick = !vm.tick;
                },1000);

                $interval(function(){
                    vm.time = new Date();
                },6000);
            }
        }

       
    }

} ());