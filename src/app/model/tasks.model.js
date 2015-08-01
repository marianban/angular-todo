(function(angular, _) {
    'use strict';

    angular
        .module('app')
        .factory('Tasks', TasksModelFactory);

        TasksModelFactory.$inject = ['Task'];

        function TasksModelFactory(Task) {
            function Tasks(data) {
                var self = this;

                data = data || {};
                data.items = data.items || [];

                self.items = [];

                _.forEach(data.items, function(task) {
                    self.items.push(new Task(task));
                });
            }

            Tasks.prototype.unshift = function(task) {
                var self = this;
                self.items.unshift(task);
            };

            Tasks.prototype.remove = function(task) {
                var self = this;
                var index = self.items.indexOf(task);
                if (index !== -1) {
                    self.removeAt(index);
                }
            };

            Tasks.prototype.removeAt = function(index) {
                var self = this;
                self.items.splice(index, 1);
            };

            Tasks.prototype.countRemaining = function() {
                var self = this;
                return _.filter(self.items, function(task) {
                    return !task.isDone;
                }).length;
            };

            return Tasks;
        }

})(angular, _);
