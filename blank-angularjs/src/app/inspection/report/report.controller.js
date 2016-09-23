(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('ReportCtrl', ReportCtrl)

    /** @ngInject */
    function ReportCtrl($scope) {
        var vm = this;
        vm.docs = [];
        vm.filter = {
            time: {
                timestart: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
                timeend: new Date(),
                format: 'yyyy年MM月dd',
                openstart: false,
                openend: false,
                options: {}
            }
        };
        vm.docover = null;
        vm.showType = 'card';
        ////
        vm.open = open;
        vm.search = search;
        vm.docmouseover = docmouseover;
        vm.changeShowType = changeShowType;
        /////
        init();

        function init() {
            loadData();
        }

        function loadData(){
            var rs = [];
            var time = new Date().getTime();
            for(var i=0;i<20;i++){
                rs.push({
                    title:'第'+(i+1)+'次督查报告',
                    time:new Date(new Date().getTime() - i * 24*60*60*1000)
                });
            }
            vm.docs = rs;
        }
        
        function changeShowType(type){
            vm.showType = type;
        }

        function docmouseover(doc){
            vm.docover = doc;
        }

        function open(key) {
            vm.filter.time[key] = true;
        }

        function search() {}
    }

}());