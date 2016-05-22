(function () {

    angular
        .module('Morph')
        .directive('morphLoginForm', morphLoginForm);

    function morphLoginForm() {
        return {
            restrict: 'E',
            templateUrl: '/partials/login/login.html',
            controller: 'UserViewCtrl',
            controllerAs: 'log'
        }
    }
})();