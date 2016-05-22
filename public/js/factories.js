(function () {
    angular
        .module("Morph")
        .factory('StreamService', function($resource) {
            return $resource('http://localhost:8000/stream/tweets');
        })
        .factory('ProfileService', function($resource) {
            return $resource('http://localhost:8000/search/tweets');
        })
        .factory('LoginService', function($resource) {
            return $resource('http://localhost:8000/user');
        })
        .factory('PostTweetService', function($resource) {
            return $resource('http://localhost:8000/tweets/post');
        })
        .factory('StorageService', function($resource) {
            return $resource('http://localhost:8000/storage/items');
        })
})();