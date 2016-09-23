(function() {
    'use strict';

    angular
        .module('app.inspection')
        .controller('VideoCtrl', VideoCtrl)

    /** @ngInject */
    function VideoCtrl($scope, $uibModal, $timeout) {
        var vm = this;
        vm.mapObj = null;
        vm.videos = [];
        vm.videoHover = null;
        vm.videoPlay = null;
        vm.modal = null;
        ////
        vm.hover = hover;
        vm.play = play;
        vm.playCancel = playCancel;
        vm.sign = sign;
        /////        
        init();

        function init() {
            loadData();
        }

        function loadData() {
            vm.videos = [{
                title: '地下停车场',
                org: '天津总队',
                src: 'assets/video/demo.mp4',
                cover: 'assets/video/demo.png'
            }, {
                title: '民用停车场',
                org: '河北总队',
                src: 'assets/video/demo_1.mp4',
                cover: 'assets/video/demo_1.png'
            }, {
                title: '路边停车场',
                org: '上海总队',
                src: 'assets/video/demo_2.mp4',
                cover: 'assets/video/demo_2.png'
            }];
        }

        function sign(){
            
        }

        function hover(v) {
            vm.videoHover = v;
        }

        function play(v) {
            vm.videoPlay = v;

            vm.modal = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/inspection/video/video-modal.html',
                scope:$scope
            });

        }

        function playCancel() {
            if(vm.modal){
                vm.modal.dismiss();
            }
        }


    }

}());