(function () {

    angular
        .module('Morph')
        .directive('morphSlider', morphSlider);

    function morphSlider() {
        return {
            restrict: 'E',
            templateUrl: '/partials/slider/slider.html',
            controller: 'SliderController',
            controllerAs: 'slider'
        }
    }
})();