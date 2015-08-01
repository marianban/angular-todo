(function(angular) {
    'use strict';

    angular
        .module('app', ['ngAnimate'])
        .config(appConfigure)
        .run(appRun);

    appConfigure.$inject = [];

    function appConfigure() {
        // Any module configuration which must be configured before running the app goes here.
    }

    function appRun() {
        // Any code that needs to be run before the app starts goes here.
    }

})(angular);
