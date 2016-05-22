(function () {

    angular
        .module('Morph')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('user', {
                url: '/:user',
                resolve: {
                    items: function (StorageService) {
                        return StorageService.query(function (data) {
                            return data;
                        });
                    }
                },
                template: '<ui-view>'
            })
            .state('user.add', {
                url: '/add',
                templateUrl: '/partials/profile/postTweet/postTweet.html',
                controller: 'PostTweetCtrl',
                controllerAs: 'post'
            })
            .state('user.search', {
                url: '/search',
                templateUrl: '/partials/profile/search/search.html',
                controller: 'UserSearchCtrl'
            })
            .state('user.storage', {
                url: '/storage',
                templateUrl: '/partials/profile/storage/storage.html',
                controller: 'StorageController',
                controllerAs: 'storage'
            });
    }
})();