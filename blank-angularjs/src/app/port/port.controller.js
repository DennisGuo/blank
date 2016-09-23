(function() {
    'use strict';

    angular
        .module('app')
        .controller('PortCtrl', PortCtrl)

    /** @ngInject */
    function PortCtrl($scope, $rootScope, $state, $timeout) {
        var vm = this;
        vm.cards = [];
        vm.cardsRendered = false;
        vm.card = null;
        vm.cardMouseOver = cardMouseOver;
        vm.cardMouseLeave = cardMouseLeave;

        var cards = [{
            title: '车辆管理模块',
            img: 'images/slide_car.png',
            link: 'http://10.0.0.199:2082/MobilePosition/',
            desc: '车辆管理模块主要是指挥中心或监管机构通过电脑进入北斗定位应用平台对所辖车辆进行相关的管理、调度、指挥等操作。主要功能有：车辆信息管理、车辆实时监控、车辆轨迹回放、车辆报警、设备异常报警、车辆调度安排、统计分析'
        }, {
            title: '车辆督查模块',
            img: 'images/slide_watch.png',
            link: '#/inspection',
            desc: '车辆督查模块主要是为了加强部队车辆的安全管理及合理使用管理。主要功能有：车辆定位督察、车貌督察、车辆安全管理督察、现场督察、督察报告等功能'
        }, {
            title: '综合展示模块',
            img: 'images/slide_show.png',
            link: '#',
            desc: '综合展示模块提供基于地理信息系统，具备矢量电子地图、影像电子地图显示功能，支持地图放大、缩小、漫游功能。支持基于特定对象或坐标的定位功能，支持空间查询功能，例如范围查询，支持空间量算功能'
        }, {
            title: '数据管理模块',
            img: 'images/slide_data.png',
            link: '#/data',
            desc: '数据管理模块主要包括单位信息管理、车辆信息管理、路线管理、区域管理、退役报废车登记管理等，以及地图的日常更新、图层管理、兴趣点管理、地图标注管理等。以及支持数据与公安部部北斗平台的数据交换与共享，支持设置数据共享策略，能够按部北斗平台接口服务标准实现数据、指令的交互；能够为其他业务应用提供开放标准规范接口'
        }, ];

        init();

        function init() {
        
           
                vm.cards = cards;
                showCard();


        }

        function showCard() {
            for (var i = 0; i < cards.length; i++) {
                (function(index) {
                    var time = (index + 1) * 300;

                    $timeout(function() {
                        vm['card_' + index] = true;
                        if(index == vm.cards.length -1){
                            $timeout(function(){vm.cardsRendered = true;},600);
                        }
                    }, time);

                }(i));

            }
        }

        function cardMouseOver(index){
             vm['card_' + index+"_mover"] = true;
             vm.card = cards[index];
        }
        function cardMouseLeave(index){
             vm['card_' + index+"_mover"] = false;
             vm.card = null;
        }
    }

}());