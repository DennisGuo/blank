(function() {
    'use strict';

    angular
        .module('app.data')
        .controller('LineCtrl', LineCtrl)

    /** @ngInject */
    function LineCtrl($scope, $timeout, $uibModal, GeoService, MapService) {
        var vm = this;
        vm.line = null;
        vm.lines = [];
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
            GeoService.getLines(function(lines) {
                if (lines) {
                    vm.lines = lines;
                    $timeout(function() {
                        show(lines[0]);
                    }, 300);
                }
            });
        }

        function show(line) {
            vm.line = line;
            showWkt(line.wkt);
        }

        function showWkt(wkt) {
            MapService.addPolylineByWkt(vm.mapObj, wkt);
        }

        function add() {
            vm.line = null;
            openModal();
        }

        function update(line) {
            vm.line = line;
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
                templateUrl: './app/data/line/line-modal.html',
                scope: $scope
            });
        }

        function search() {

            if (!vm.filter.name) {
                loadData();
                return;
            }

            GeoService.getLines(function(lines) {
                if (lines) {
                    var rs = [];
                    for (var i = 0; i < lines.length; i++) {
                        var o = lines[i];
                        if (o.name.indexOf(vm.filter.name) >= 0) {
                            rs.push(o);
                        }
                    }
                    vm.lines = rs;
                }
            });

        }


    }

}());