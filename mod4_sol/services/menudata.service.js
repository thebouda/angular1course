(function(){

    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService ($http, ApiBasePath){
        var menuServ = this;

        menuServ.getAllCategories = function(){
            return $http(
                {
                method: 'GET',
                url: (ApiBasePath + "categories.json")
                }
            ).then(function(response){
                return response.data;
                
            }

            );
        };


        menuServ.getItemsForCategory = function(categoryShortName){
            return $http(
                {
                method: 'GET',
                url: (ApiBasePath + "menu_items/" + categoryShortName + "/.json")
                }
            ).then(function(resp){
                return resp.data;
            }

            );
        };
    }
})();
