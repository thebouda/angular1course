(function () {
'use strict';

angular.module('MsgApp', [])
.controller('InputController', InputController);

InputController.$inject = ['$scope'];
function InputController($scope) {

$scope.msgOut = "message out condition 1"

$scope.MessageOutput = function(){
    $scope.checkingElements($scope.input)
}

$scope.checkingElements = function(stringElems){
    length = stringElems.split(",").filter($scope.isEmpty).length
    if (length > 0 & length <=3){
        $scope.messageOut = "Enjoy"
    }
    if (length > 3){
        $scope.messageOut = "Too much!"
    }
    if (length == 0){
        $scope.messageOut = "Please enter data first"
    }
}

$scope.isEmpty = function(element){
    return (element != "")
}
}

})();