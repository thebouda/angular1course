(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

// var SignUpController = function(){
function SignUpController(MenuService) {
  var sign = this;
  sign.favoriteDish = {};


  sign.signup = function(form) {

    // get the menu 
    MenuService.getDish(sign.user.favoriteMenu).then(function(response){
      sign.user.favDish = response ;
      if (sign.user.favDish ==null){
        sign.showError = true;
        sign.msg =  "No such menu number exists";
        sign.showMsg = false;

      }else{
        sign.showError = false;
        sign.msg = "Your information has been saved";
        sign.showMsg = true;
        /// save user
        MenuService.saveUser(sign.user)
      }
    }, function(error){
      console.log("error log ", error);
      sign.showError = true;
    });


    console.log(sign.favoriteDish.value == null)
  }


  }

})();



  