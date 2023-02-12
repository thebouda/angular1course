(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];

function MyInfoController(MenuService) {
  var info = this;
  info.user = {};
  info.userPresent = false;

  info.user = MenuService.getUser();
  
  console.log("equals",angular.equals(info.user,{}))

  if (!angular.equals(info.user,{})){
    // console.log(info.user)
    info.userPresent = true;  
    // console.log("user present", info.userPresent)
  }



  }

})();



  