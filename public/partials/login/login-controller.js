(function () {

    angular
        .module('Morph')
        .controller('UserViewCtrl', UserViewCtrl);

    function UserViewCtrl(dataService) {
            var vm = this;
            vm.loginData = {};
            vm.viewUser = viewUser;

            function viewUser() {
                return dataService.viewUser(vm.loginData);
            }
        }

})();
