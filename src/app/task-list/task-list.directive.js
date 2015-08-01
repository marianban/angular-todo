(function(angular) {
    'use strict';

    angular
        .module('app')
        .directive('taskList', taskList);

    taskList.$inject = [];

    function taskList() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/task-list/task-list.directive.html',
            scope: {
                tasks: '=?'
            },
            controller: TaskListController,
            controllerAs: 'vm',
            bindToController: true
        };

        TaskListController.$inject = ['Task'];

        return directive;

        function TaskListController(Task) {
            var vm = this;

            vm.addNewTask = addNewTask;
            vm.removeTask = removeTask;

            function addNewTask(task) {
                vm.tasks.unshift(new Task(task));
                task.description = null;
            }

            function removeTask(task) {
                vm.tasks.remove(task);
            }
        }
    }

})(angular);
