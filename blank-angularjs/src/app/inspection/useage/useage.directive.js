(function () {
    'use strict';

    angular
        .module ('app.inspection')
        .directive ('random', randomFn);

    function randomFn() {

        return {
            bindToController: true,
            template:'{{vm.name}}',
            controller: randomDriverController,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {
                data:'='
            },
        }
        /** @ngInject */
        function randomDriverController($scope,$timeout){
            var vm = this;
            $timeout(function(){
                vm.data =  $scope.vm.data;
                vm.name = null;
                 init();
           },600);
           
            function init(){
                vm.name = vm.data[Math.floor(Math.random()*vm.data.length)];
            }
        }

        function link(){

        }

    }

} ());