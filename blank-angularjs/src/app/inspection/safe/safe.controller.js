(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('SafeCtrl', SafeCtrl)

    /** @ngInject */
    function SafeCtrl($scope,$http) {
        var vm = this;
        vm.filter = {
            dName: null,
            dId: null,
            time: {
                timestart: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
                timeend: new Date(),
                format: 'yyyy年MM月dd',
                openstart: false,
                openend: false,
                options: {}
            }
        };
        vm.chart = {
            colors: [],
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            series: ['本年', '去年', '对比'],
            data: [
                [54, 80, 23, 35, 56, 82, 12, 34, 12, 23, 23, 10],
                [45, 50, 40, 23, 20, 35, 20, 12, 32, 15, 31, 19],
                [9, 30, -17, 12, 36, 47, -8, 22, -20, 8, -8, -9]
            ],
            datasetOverride: [{
                label:'本年',
                type: 'bar'
            }, {
                label:'去年',
                type: 'bar'
            }, {
                lable:'对比',
                type: 'line',
                borderWidth: 3,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            }],
            options: {}
        };
        vm.cars = [];
        vm.drivers = ["訾乐家","可秀颖","孟傲安","展孟乐","雷云泽","太叔千柔","五忆柏","柔醉柳","穰兰若","冒孤晴","拜涵阳","查恬雅","种妙菡","郑恨真","施瑞渊","鄂俊贤","闾丘怜云","卜妍丽","骑玉泽","束静和","宫珑玲","合问寒","庞悠馨","漆睿慈","买希恩","段乐音","麻春燕","漫晓彤","刁红雪","庆如柏","卷桂帆","弥彤蕊","苟乐咏","眭迎蕾","尉念双","申屠访梦","宰父烨霖","钮傲雪","汉雪珍","运信厚","类彭祖","余思卉","姚若枫","廖季雅","瓮格菲","泉代芙","宰斯伯","佼飞章","百星海","枝歆然","皇同和","梅秀越","蒿云天","杞香彤","岳修明","都水悦","萨娅芳","原婉容","袁星剑","迟映寒","函丝柳","乌雅雨筠","多文轩","粘梦菡","柳涵瑶","嵇雪风","坚元枫","贵博艺","官赞怡","以春冬","果玮艺","纪慧英","费莫碧萱","唐静慧","门德义","印秀颖","进虹影","冀国安","呼怀山","简芳懿","揭凡霜","慈傲丝","胡暖暖","朴俊迈","东方震轩","乐正馨逸","招月天","蚁凌晴","邹敏叡","汪兰芝","亢乐然","尾语冰","紫碧菡","丹晓星","计新雨","席湛静","淦涵菱","司马正阳","源痴灵","森元旋","甘玟丽"];
        vm.accidents = ['追尾','碰撞','擦挂','超速','闯红灯','违规'];
        ////
        vm.open = open;
        ////
        init();

        function init() {
            loadData();
        }

        function loadData(){
            $http.get('../app/data/car/car.json').then(function(rs) {
                if (rs.data) {
                    vm.cars = rs.data;
                }
            }, function(err) {});
        }


        function open(key) {
            vm.filter.time[key] = true;
        }

    }

}());