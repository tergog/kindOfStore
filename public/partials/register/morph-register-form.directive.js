(function () {

    angular
        .module('Morph')
        .directive('morphRegisterForm', morphRegisterForm);

    function morphRegisterForm() {
        return {
            restrict: 'E',
            templateUrl: '/partials/register/register.html',
            controller: 'UserAddCtrl',
            controllerAs: 'reg'
        }
    }
})();