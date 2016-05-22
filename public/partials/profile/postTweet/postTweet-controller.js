(function () {
    angular
        .module('Morph')
        .controller('PostTweetCtrl', PostTweetCtrl);

    function PostTweetCtrl($stateParams, PostTweet
) {
        var vm = this;
        vm.tweetData = {
            user: $stateParams.user
        };
        vm.postTweet = postTweet;

        function postTweet() {
            vm.tweet = new PostTweet();
            vm.tweet.$save(vm.tweetData);
        }
    }
})();