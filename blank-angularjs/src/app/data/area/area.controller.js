(function() {
    'use strict';

    angular
        .module('app.data')
        .controller('AreaCtrl', AreaCtrl)

    /** @ngInject */
    function AreaCtrl($scope, $timeout, $uibModal, GeoService, MapService) {
        var vm = this;
        vm.area = null;
        vm.areas = [];
        vm.filter = {
            name: null
        };
        vm.modal = null;
        vm.mapObj = null;

        ////
        vm.search = search;
        vm.add = add;
        vm.update = update;
        vm.modalOk = modalOk;
        vm.modalCancel = modalCancel;
        vm.show = show;
        ////

        init();

        function init() {
            loadData();
        }

        function loadData() {
            GeoService.getAreas(function(areas) {
                if (areas) {
                    vm.areas = areas;
                    $timeout(function() {
                        show(areas[0]);
                    }, 300);
                }
            });
        }

        function show(area) {
            vm.area = area;
            showWkt(area.wkt);
        }

        function showWkt(wkt) {
            MapService.addPolygonByWkt(vm.mapObj, wkt);
        }

        function add() {
            vm.area = null;
            openModal();
        }

        function update(area) {
            vm.area = area;
            openModal();
        }
        //保存或更新
        function modalOk() {

        };

        function modalCancel() {
            if (vm.modal) {
                vm.modal.dismiss();
            }
        }

        function openModal() {
            vm.modal = $uibModal.open({
                templateUrl: './app/data/area/area-modal.html',
                scope: $scope
            });
        }

        function search() {

            if (!vm.filter.name) {
                loadData();
                return;
            }

            GeoService.getAreas(function(areas) {
                if (areas) {
                    var rs = [];
                    for (var i = 0; i < areas.length; i++) {
                        var o = areas[i];
                        if (o.name.indexOf(vm.filter.name) >= 0) {
                            rs.push(o);
                        }
                    }
                    vm.areas = rs;
                }
            });

        }


    }

}());