(function() {
    'use strict';

    angular
        .module('app.map', [])
        .service('MapService', MapService)
        .directive('mapView', mapView);

    ////////////////////////////////


    function mapView() {

        return {
            bindToController: true,
            controller: mapViewController,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {
                id: '@',
                mapObj: '='
            },
        }

        /** @ngInject */
        function mapViewController($scope) {
            var vm = this;
            vm.mapObj = $scope.vm.mapObj;
            vm.options = {
                addr: {
                    vector: 'http://10.0.0.196:8888/QuadServer/maprequest?services=PGIS_vector',
                    vectorTrans: 'http://10.0.0.196:8888/QuadServer/maprequest?services=PGIS_tranc',
                    raster: 'http://10.0.0.196:8888/QuadServer/maprequest?services=PGIS_raster',
                },
                center: {
                    x: 119.39235020091961,
                    y: 35.110788417764596
                },
                mapExtent: "-256, 256, -256, 256",

            };

            init();

            function init() {
                initMap();
            }

            function initMap() {
                var option = getCommonMapOption();
                option.mapServer = addCustomMapServer("VectorMapServer", vm.options.addr.vector);
                option.center = new GPoint(vm.options.center.x, vm.options.center.y);;
                //初始化经纬度地图
                option.mapExtent = vm.options.mapExtent;
                //option.mapProj     = " proj=lonlat";
                option.mapProj = "+proj=longlat";

                vm.mapObj = new GMap($scope.vm.id, option); //初始化地图服务器。将刚才定义的GMapServer对象赋值
                //2016.08.09 第三方测试导航旋转不可用，暂时隐藏
                vm.mapObj.showNavigater(false);
            }

            //通用的GMapOptions对象
            function getCommonMapOption() {
                var option = new GMapOptions(); //定义一个GMapOptions对象（包含了所有初始参数）
                option.zoomLevel = 10;
                option.fixOverlap = true; //ff中支持滚轮
                option.maxLevel = 20;
                option.minLevel = 1;
                option.movestyle = 0;
                option.MapInterval = 0.5;
                //option.jbcom     = true;//军标，会影响地图上的浮动层   
                //option.offset    = true;
                return option;
            }
            //根据类型创建地图服务器对象
            function addCustomMapServer(name, vectorMapAddress) {
                var server = new GMapServer();
                server.type = GMapViews.MAPSERVER; //Geobeans 栅格地图服务
                server.name = name;
                server.address = vectorMapAddress;
                return server;
            }

        }

        function link() {}
    };


    /** @ngInject */
    function MapService() {

        var services = {
            getBaseStyle: getBaseStyle,
            centerAtDataByWkt: centerAtDataByWkt,
            addPolylineByWkt: addPolylineByWkt,
            addPolygonByWkt: addPolygonByWkt,
            addPoint:addPoint
        };

        return services;

        /////

        //获取基本的样式GStyle对象
        function getBaseStyle() {
            var style = new GStyle();
            style.infoWinWidth = 320;
            style.infoWinHeight = 180;
            style.infoWinType = GMap.HTMLINFOWIN;
            style.showInfoWindow = false;
            style.borderColor = '0xFF0000';
            style.border = true;
            style.bgColor = '0xffffff';
            style.showBgColor = true;
            style.fontColor = '0xff0000';
            style.imageInfo = "0xff0000,0x00ff00";
            style.strParam = '10,13,16,1,1,1.1,1.2,1.3,1.4,1.5,2,4,8'; //半径,必须设置（批量添加图层）

            style.fillColor = '0x0000ff'; //面  
            style.fillOpacity = 40; //面

            style.lineColor = '0xff0000'; //线
            style.lineOpacity = 80; //线
            style.lineSize = 2; //线
            style.iconSrc = "../images/car_red.png";		//默认的图标
            //0xff0000,0x00ff00,0x0000ff
            // style.strParam		= "<strParam><isLayerCollid>0</isLayerCollid><typeColors>0xff0000,0x00ff00,0x0000ff</typeColors><borderSize>0</borderSize><bordstr></bordstr></strParam>";

            return style;
        }
        //添加WKT格式的polyline  
        function addPolylineByWkt(mapObj, wkt) {
            var style = getBaseStyle();

            var strwkt = wkt;

            var polyline = new GPolylineOverlay(strwkt, style);
            mapObj.addOverlayByWKT(polyline);
            centerAtDataByWkt(mapObj, wkt);
        }

        //添加WKT格式的polygon  
        function addPolygonByWkt(mapObj, wkt) {
            var style = getBaseStyle();

            var strwkt = wkt;

            var polygon = new GPolygonOverlay(strwkt, style);
            mapObj.addOverlayByWKT(polygon);
            centerAtDataByWkt(mapObj, wkt);
        }

        function addPoint(mapObj,label,lat,long){
            var marker = new GMarker(new GPoint(long,lat),label,getBaseStyle(),label);
            mapObj.addOverlay(marker);
            mapObj.setOverlayCenter(label,false);  
        }

        function centerAtDataByWkt(mapObj, wkt) {
            var str = wkt.replace(/([A-Z])|\(|\)/g, '').replace(/\s/g, ',');
            mapObj.centerAtData(str);
        }
    };

}());