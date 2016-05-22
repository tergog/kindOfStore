(function () {
    
    angular
        .module('Morph')
        .controller('UserAddCtrl', UserAddCtrl);

    function UserAddCtrl(dataService) {
            var vm = this;
            vm.registerUser = registerUser;
            vm.userData = {};
            vm.alerts = {};

            function registerUser() {
                return dataService.registerUser(vm.userData, vm.alerts);
            }
        }
})();