(function() {
    'use strict';

    angular
        .module('app.inspection')
        .config(InspectionConfig)

    /** @ngInject */
    function InspectionConfig($stateProvider) {
        $stateProvider
            .state('inspection', {
                url: '/inspection',
                templateUrl: "app/inspection/inspection.html",
                controller: 'InspectionCtrl',
                controllerAs: 'vm'
            })
            .state('inspection.dashboard', {
                url: '/dashboard',
                views: {

                    "content": {

                        templateUrl: "app/inspection/dashboard/dashboard.html",
                        controller: 'DashboardCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('inspection.location', {
                url: '/location',
                views: {
                    "content": {

                        templateUrl: "app/inspection/location/location.html",
                        controller: 'LocationCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('inspection.useage', {
                url: '/useage',
                views: {
                    "content": {

                        templateUrl: "app/inspection/useage/useage.html",
                        controller: 'UseageCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('inspection.safe', {
                url: '/safe',
                views: {
                    "content": {

                        templateUrl: "app/inspection/safe/safe.html",
                        controller: 'SafeCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('inspection.video', {
                url: '/video',
                views: {
                    "content": {

                        templateUrl: "app/inspection/video/video.html",
                        controller: 'VideoCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('inspection.report', {
                url: '/report',
                views: {
                    "content": {

                        templateUrl: "app/inspection/report/report.html",
                        controller: 'ReportCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('inspection.surface', {
                url: '/surface',
                views: {
                    "content": {

                        templateUrl: "app/inspection/surface/surface.html",
                        controller: 'SurfaceCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
    }

}());