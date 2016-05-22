(function () {

    angular
        .module('Morph')
        .controller('StorageController', StorageController);

    function StorageController (items) {
        var vm = this;
        vm.data = [];
        vm.predicate = 'price';
        vm.currentPage = 1;
        vm.itemsPerPage = 6;
        vm.totalItems = items.length;
        vm.setPage = setPage;
        vm.order = order;
        vm.showAllItems = showAllItems;
        vm.setItemsPerPage = setItemsPerPage;
        pageItems();

        function setItemsPerPage(qty) {
            vm.itemsPerPage = qty;
            vm.itemsOnPage = vm.data[vm.currentPage - 1];
        }

        function showAllItems() {
            vm.currentPage = 1;
            vm.itemsOnPage = items;
            vm.itemsPerPage = vm.totalItems;
        }

        function pageItems () {
            var pageItems, i;
            for (i = 0; i < vm.totalItems; i+=vm.itemsPerPage) {
                pageItems = items.slice(i, i + vm.itemsPerPage);
                vm.data.push(pageItems);
            }
            vm.itemsOnPage = vm.data[0];
        }

        function setPage(pageNo) {
            vm.itemsOnPage = vm.data[pageNo-1];
        }

        function order (predicate) {
            vm.predicate = predicate;
        }
    }
})();
