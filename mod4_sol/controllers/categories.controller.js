(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories']
    function categoriesController(categories){
        categoriesController = this;
        categoriesController.categories = categories;
    };

})();