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
    info.user.menuSection = info.user.favoriteMenu.match(/[a-zA-Z]+|[0-9]+/g)[0];
    info.user.favoriteMenuPath = info.user.favoriteMenu.match(/[a-zA-Z]+|[0-9]+/g)[1];
    if (info.user.favoriteMenuPath == '0'){
      info.user.favoriteMenuPath =''
    }
    console.log("fadish",info.user.favDish )
    // info.user.menuDescription = 
    // info.user.menuName = 

  }

  



  }

})();



  