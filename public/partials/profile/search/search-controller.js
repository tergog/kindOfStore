(function () {
    angular
        .module('Morph')
        .controller('UserSearchCtrl', UserSearchCtrl);

    function UserSearchCtrl($window, StreamService, $scope, ProfileService, $cookies, $interval) {
        $scope.searchTweets = searchTweets;
        $scope.streamTweets = streamTweets;
        $scope.logout = logout;
        $scope.search = {};
        $scope.tweets = [];

        function searchTweets () {
            ProfileService.get({searchData: $scope.search.text}, function (data) {
                $scope.search.textResp = data;
            });
        }

        function streamTweets() {
            $interval(function () {
                StreamService.get({searchData: $scope.search.text}, function (data) {
                    console.log($scope.search.textResp.length);

                    $scope.search.textResp = data;

                })
            }, 2000);
        }

        function logout() {
            $cookies.remove('user');
            $window.location.href = '/';
        }

    }
})();
