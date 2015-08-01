(function(angular, JSON) {
    'use strict';

    angular
        .module('app')
        .factory('localStorage', localStorageFactory);

    localStorageFactory.$inject = ['$window', 'Tasks'];

    function localStorageFactory($window, Tasks) {
        // https://mathiasbynens.be/notes/localstorage-pattern
        var storage = (function() {
            var uid = new Date();
            var storage;
            var result;
            try {
                (storage = $window.localStorage).setItem(uid, uid);
                result = storage.getItem(uid) == uid;
                storage.removeItem(uid);
                return result && storage;
            } catch (exception) {}
        }());

        var localStorage = {
            isSupported: isSupported,
            getItem: getItem,
            setItem: setItem
        };

        return localStorage;

        function isSupported() {
            return !!storage;
        }

        function getItem(key) {
            return JSON.parse(storage.getItem(key));
        }

        function setItem(key, obj) {
            storage.setItem(key, JSON.stringify(obj));
        }
    }

})(angular, JSON);
