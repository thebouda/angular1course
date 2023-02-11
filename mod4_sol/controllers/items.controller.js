(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'items'];
    function itemsController($stateParams, items){
        var itemsController = this;
        itemsController.items = items;

    };

})();
