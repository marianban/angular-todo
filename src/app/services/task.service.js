(function(angular) {
    'use strict';

    angular
        .module('app')
        .factory('taskService', taskServiceFactory);

    taskServiceFactory.$inject = ['$q', 'localStorage', 'Tasks'];

    function taskServiceFactory($q, localStorage, Tasks) {
        var taskService = {
            getTasks: getTasks,
            saveTasks: saveTasks
        };

        function getTasks() {
            var tasks = new Tasks();

            if (localStorage.isSupported()) {
                tasks = new Tasks(localStorage.getItem('tasks'));
            }

            return $q.when(tasks);
        }

        function saveTasks(tasks) {
            if (localStorage.isSupported()) {
                localStorage.setItem('tasks', tasks);
            }
        }

        return taskService;
    }

})(angular);
