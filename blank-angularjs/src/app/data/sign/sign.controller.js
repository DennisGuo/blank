(function() {
    'use strict';

    angular
        .module('app.data')
        .controller('SignCtrl', SignCtrl)

    /** @ngInject */
    function SignCtrl($scope,$uibModal,CarService) {
        var vm = this;
        vm.modal = null;
        vm.car = null;
        vm.cars = {
            one:[],
            two:[]
        };
        vm.carsCrt = [];
        vm.signType = 1;

        ////

        vm.add = add;
        vm.modalOk = modalOk;
        vm.modalCancel = modalCancel;
        vm.loadData = loadData;
        ////

        init();

        function init() {
            CarService.getCarsBySignType(1,function(data){
                vm.cars.one = data;
                loadData(vm.signType);
            });
            CarService.getCarsBySignType(2,function(data){
                vm.cars.two = data;
                loadData(vm.signType);
            });
        }

        function loadData(type){
            vm.signType = type ;
            vm.carsCrt = type == 1 ? vm.cars.one : vm.cars.two;
        }

        function add(type) {
            vm.signType = type;
            vm.car = null;
            openModal();
        }

        function openModal() {
            vm.modal = $uibModal.open({
                templateUrl: './app/data/sign/sign-modal.html',
                scope: $scope
            });
        }

        //保存或更新
        function modalOk() {

        };

        function modalCancel() {
            if (vm.modal) {
                vm.modal.dismiss();
            }
        }

    }

}());