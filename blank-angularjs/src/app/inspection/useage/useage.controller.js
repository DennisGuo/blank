(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('UseageCtrl', UseageCtrl)

    /** @ngInject */
    function UseageCtrl($scope,$http,$interval,$filter) {
        var vm = this;
        vm.cars = [];
        vm.chart = {
            options: {
                title:{display:true,text:'车辆总公里数分布图'},
                scales: {
                    xAxes: [{
                        display: false,
                        ticks: {
                            max: 125,
                            min: -125,
                            stepSize: 10
                        }
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            max: 125,
                            min: -125,
                            stepSize: 10
                        }
                    }]
                }
            }
        };
        ////
        vm.getRandomUsage = getRandomUsage;
        ////
        init();

        function init() {
            loadData();
            createChart();
            $interval(createChart,3000);
        }

        function getRandomUsage(car){
            var num = $filter('number')(car.lat,5);
            return parseInt((''+num).split('.')[1]);
        }

        function loadData(){
             $http.get('../app/data/car/car.json').then(function(rs) {
                if (rs.data) {
                    vm.cars = rs.data;
                }
            }, function(err) {});
        }


        function createChart() {
            vm.chart.data = [];
            for (var i = 0; i < 50; i++) {
                vm.chart.data.push([{
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: randomRadius()
                }]);
            }
        }

        function randomScalingFactor() {
            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        }

        function randomRadius() {
            return Math.abs(randomScalingFactor()) / 4;
        }

    }

}());