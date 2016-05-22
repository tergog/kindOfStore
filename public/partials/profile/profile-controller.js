(function () {
    angular
        .module('Morph')
        .controller('UserProfileCtrl', UserProfileCtrl);

    function UserProfileCtrl($window, $cookies) {
            var vm = this;
            vm.logout = logout;

            function logout() {
                $cookies.remove('user');
                $window.location.href = '/';
            }
        }
})();
