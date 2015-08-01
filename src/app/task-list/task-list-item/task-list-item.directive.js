(function(angular) {
    'use strict';

    angular
        .module('app')
        .directive('taskListItem', taskListItem);

    taskListItem.$inject = [];

    function taskListItem() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/task-list/task-list-item/task-list-item.directive.html',
            scope: {
                task: '=?',
                editable: '=?',
                forceEditMode: '&',
                onPrimaryAction: '&',
                onRemove: '&',
                primaryActionTitle: '@'
            },
            controller: TaskListItemController,
            controllerAs: 'vm',
            bindToController: true
        };

        TaskListItemController.$inject = ['Task'];

        return directive;

        function TaskListItemController(Task) {
            var vm = this;

            vm.primaryAction = primaryAction;
            vm.remove = remove;
            vm.edit = edit;

            activate();

            function activate() {
                vm.task = vm.task || new Task();

                if (angular.isUndefined(vm.editable)) {
                    vm.editable = false;
                }
            }

            function primaryAction() {
                if (vm.task.isValid()) {
                    if (!vm.forceEditMode()) {
                        vm.editable = false;
                    }
                    vm.onPrimaryAction({
                        task: vm.task
                    });
                }
            }

            function edit() {
                vm.editable = true;
            }

            function remove() {
                vm.onRemove({
                    task: vm.task
                });
            }
        }
    }

})(angular);
