(function() {
    'use strict';

    angular
        .module('app.data')
        .controller('CarCtrl', CarCtrl)

    /** @ngInject */
    function CarCtrl($scope, $timeout, $uibModal, CarService) {
        var vm = this;
        vm.car = null;
        vm.cars = [];
        vm.filter = {
            dId: null,
            dName: null
        };
        ///
        vm.search = search;
        vm.add = add;
        vm.update = update;
        vm.modalOk = modalOk;
        vm.modalCancel = modalCancel;
        vm.showCar = showCar;
        ///

        init();

        function init() {
            CarService.getCars(function(cars) {
                if (cars) {
                    vm.cars = cars;
                    $timeout(function() {
                        showCar(cars[0]);
                    }, 300);
                }
            });
        }

        function showCar(car) {
            vm.car = null;
            $timeout(function() {
                vm.car = car;
            }, 200);
        }

        //保存或更新
        function modalOk() {

        };

        function modalCancel() {
            if (vm.modal) {
                vm.modal.dismiss();
            }
        }

        function add() {
            vm.org = null;
            openModal();
        }

        function update(car) {
            vm.car = car;
            openModal();
        }

        function openModal() {
            vm.modal = $uibModal.open({
                templateUrl: './app/data/car/car-modal.html',
                scope: $scope
            });
        }

        function search() {

            if (!vm.filter.dId && !vm.filter.dName) {
                loadData();
                return;
            }
            CarService.getCars(function(cars) {
                if (cars) {

                    var rs = [];
                    for (var i = 0; i < cars.length; i++) {
                        var o = cars[i];
                        if (vm.filter.dName && vm.filter.dId) {
                            if (o.dName.indexOf(vm.filter.dName) >= 0 &&
                                o.dId.indexOf(vm.filter.dId) >= 0
                            ) {
                                rs.push(o);
                            }
                        } else if (o.dName.indexOf(vm.filter.dName) >= 0) {
                            rs.push(o);
                        } else if (o.dId.indexOf(vm.filter.dId) >= 0) {
                            rs.push(o);
                        }
                    }
                    vm.cars = rs;
                }
            });

        }

    }

}());