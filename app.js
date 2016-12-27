(function (){
  'use strict';

angular.module('myFirstApp', [])

.controller('DIcontroller', DIcontroller);

DIcontroller.$inject = ['$scope','$filter'];
   function DIcontroller($scope,$filter){
   $scope.name = "Mufaddal";
   
   $scope.upper = function(){
   	var upCase = $filter('uppercase');
   	$scope.name = upCase($scope.name);
   };

   $scope.sayMsg = function(){
       return "good man";
   };
};


} )();
