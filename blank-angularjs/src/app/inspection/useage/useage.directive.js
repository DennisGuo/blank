(function () {
    'use strict';

    angular
        .module ('app.inspection')
        .directive ('random', randomFn);


    /** @ngInject */
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

        function randomDriverController($scope){
            var vm = this;
            vm.data =  $scope.vm.data;
            vm.name = null;
            init();

            function init(){
                vm.name = vm.data[Math.floor(Math.random()*vm.data.length)];
            }
        }

        function link(){

        }

        
    }

} ());