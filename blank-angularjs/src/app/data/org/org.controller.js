(function() {
    'use strict';

    angular
        .module('app.data')
        .controller('OrgCtrl', OrgCtrl)

    /** @ngInject */
    function OrgCtrl($scope, $uibModal, OrgService) {
        var vm = this;
        vm.org = null;
        vm.orgs = [];
        vm.filter = {
            code: null,
            name: null
        };
        vm.modal = null;
        ///
        vm.search = search;
        vm.add = add;
        vm.update = update;
        vm.modalOk = modalOk;
        vm.modalCancel = modalCancel;
        ///
        init();

        function init() {
            loadData();


        }

        function loadData() {
            OrgService.getOrg(function(orgs) {
                if (orgs) {
                    vm.orgs = orgs;
                }
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

        function add() {
            vm.org = null;
            openModal();
        }

        function update(org) {
            vm.org = org;
            openModal();
        }

        function openModal() {

            vm.modal = $uibModal.open({
                templateUrl: './app/data/org/org-modal.html',
                scope: $scope
            });
        }

        function search() {

            if (!vm.filter.name && !vm.filter.code) {
                loadData();
                return;
            }


            OrgService.getOrg(function(orgs) {
                if (orgs) {

                    var rs = [];
                    for (var i = 0; i < orgs.length; i++) {
                        var o = orgs[i];
                        if (vm.filter.name && vm.filter.code) {
                            if (o.name.indexOf(vm.filter.name) >= 0 &&
                                o.code.indexOf(vm.filter.code) >= 0
                            ) {
                                rs.push(o);
                            }
                        } else if (o.name.indexOf(vm.filter.name) >= 0) {
                            rs.push(o);
                        } else if (o.code.indexOf(vm.filter.code) >= 0) {
                            rs.push(o);
                        }
                    }
                    vm.orgs = rs;
                }
            });
        }

    }

}());