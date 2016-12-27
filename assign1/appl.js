(function (){
  'use strict';

angular.module('myFirstApp', [])
.controller('assign', assign);

assign.$inject = ['$scope'];

   function assign($scope){
   $scope.food = " ";
   $scope.msg = "";
   $scope.value = 0;

   $scope.total = function(){
     var arrstr = splitString($scope.food);
     $scope.value = arrstr
     if($scope.value<4){
       $scope.msg =  "Enjoy";
     }
        if ($scope.value>3) {
         $scope.msg = "too much";
       }
       if($scope.value ==0) {
         $scope.msg =  "please enter data";
       }
   };
    function splitString(string){
      var arr = string.splitString(",");
      var x = arr.length;
      return x;
    };

};

} )();
