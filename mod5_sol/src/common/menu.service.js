(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user = {}

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data; 
    });
  };


  service.getDish = function(dish){
    var letter = dish.match(/[a-zA-Z]+|[0-9]+/g)[0];
    var number = dish.match(/[a-zA-Z]+|[0-9]+/g)[1];

    return $http
          .get(ApiPath +'/menu_items/'+ letter +'/menu_items/' + number + '.json')
          .then(function (response) {
            return response.data;
          })
  };

  service.saveUser = function(user){
    service.user = user;
    console.log(service.user)
  };


  service.getUser = function(){
    return service.user;
  }
}



})();
