(function(angular) {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$interval', 'Tasks', 'taskService'];

    function AppController($scope, $interval, Tasks, taskService) {
        var vm = this;
        var stopInterval;

        activate();

        function activate() {
            vm.tasks = new Tasks();

            taskService.getTasks().then(function(tasks) {
                vm.tasks = tasks;
            });

            stopInterval = $interval(storeTasks, 2000);
        }

        function storeTasks() {
            taskService.saveTasks(vm.tasks);
        }

        $scope.$on('$destroy', function() {
            $interval.cancel(stopInterval);
        });
    }

})(angular);
