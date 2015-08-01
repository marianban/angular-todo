(function(angular, _) {
    'use strict';

    angular
        .module('app')
        .factory('Task', TaskModelFactory);

    function TaskModelFactory() {
        function Task(data) {
            data = data || {};

            this.description = data.description;
            this.isDone = data.isDone;
        }

        Task.prototype.isValid = function() {
            var self = this;
            return !!self.description;
        };

        return Task;
    }

})(angular, _);
