(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('SurfaceCtrl', SurfaceCtrl)

    /** @ngInject */
    function SurfaceCtrl($scope, $timeout, $http, MapService) {
        var vm = this;
        vm.filter = {
            dName: null,
            dId: null
        };
        vm.car = null;
        vm.cars = [];
        vm.mapObj = null;
        ////
        vm.search = search;
        vm.show = show;
        ////

        init();

        function init() {
            loadData();

        }

        function loadData() {
            $http.get('../app/data/car/car.json').then(function(rs) {
                if (rs.data) {
                    vm.cars = rs.data;
                    show(vm.cars[0]);
                }
            }, function(err) {});
        }

        function show(car) {
            vm.car = car;
            if (vm.mapObj) {
                MapService.addPoint(vm.mapObj, car.dName, car.lat, car.lon);
            }
        }

        function search() {
            if (!vm.filter.dId && !vm.filter.dName) {
                loadData();
                return;
            }

            $http.get('../app/data/car/car.json').then(function(res) {
                if (res.data) {
                    var rs = [];
                    for (var i = 0; i < res.data.length; i++) {
                        var o = res.data[i];
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