(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('DashboardCtrl', DashboardCtrl)

    /** @ngInject */
    function DashboardCtrl($scope,$filter, $interval) {
        var vm = this;
        vm.status = {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            series: ['在线', '离线'],
            data: [
                [2000, 2300, 4000, 1700, 2200, 3000, 2100, 5000, 6000, 1200, 1000, 2000],
                [3000, 2700, 1200, 3500, 3000, 2200, 3200, 1000, 500, 3300, 4300, 3300]
            ],
            options: {
                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    }]
                }
            }
        };

        vm.accident = {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            series: ['主动事故', '被动事故'],
            data: [
                [20, 23, 40, 17, 22, 30, 21, 50, 60, 12, 10, 20],
                [30, 27, 12, 35, 30, 22, 32, 10, 50, 33, 43, 33]
            ]
        };

        vm.types = {
            labels: ['公务车', '运兵车', '越野车', '后勤保障车', '通信指挥车'],
            data: [
                [600, 400, 600, 700, 500],
                [2000, 1800, 2100, 2200, 1900]
            ]
        };

        vm.speed = {
            labels: [],
            data: [
                []
            ],
            options:{
                legend: { display: false }
            }
        };;

        //////

        init();

        function init() {
            renderSpeedChart();
            $interval(renderSpeedChart, 5000);
        }

        function renderSpeedChart() {

            var _ = vm.speed;

            var time = new Date().getTime();
            var maxLen = 7;

            if (_.labels.length != maxLen) {
                var rs = [],
                    data = [];
                for (var i = maxLen; i > 0; i--) {
                    var lb = getLabel(time - i * 5000);
                    var r = getRandomValue();
                    rs.push(lb);
                    data.push(r);
                }
                _.labels = rs;
                _.data[0] = data;
            } else {
                for (var i = 0; i < maxLen - 1; i++) {
                    _.labels[i] = _.labels[i + 1];
                    _.data[0][i] = _.data[0][i + 1];
                }
                _.labels[maxLen - 1] = getLabel(new Date().getTime());
                _.data[0][maxLen - 1] = getRandomValue();
            }


            function getRandomValue() {
                return 40 + Math.floor(20 * Math.random());
            }

            function getLabel(time) {
                var n = new Date(time);
                var lb = $filter('date')(n,'HH:mm:ss');
                return lb;
            }

        }

    }

}());