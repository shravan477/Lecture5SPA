(function(){
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){
  $scope.name = "Shravan";
  $scope.sayHello = function(){
    return "Hello Coursera!";
  };
});
})();
