(function () {

    angular
        .module('Morph')
        .controller('SliderController', SliderController);


    function SliderController($interval) {
        var vm = this;
        vm.imgSlides = ["../img/slideimg_1.jpg", "../img/slideimg_2.jpg", "../img/slideimg_3.jpg"];
        vm.img = vm.imgSlides[2];
        vm.num = 0;

        $interval(function () {
            if(vm.num === vm.imgSlides.length) {
                vm.num = 0;
            }
            vm.img = vm.imgSlides[vm.num];
            vm.num++
        }, 2000);

    }
})();