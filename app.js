/*(function (){
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


} )();*/
(function() {
    'use strict';

    angular.module('Assignment1', [])
    .controller("Controller", Controller);

    Controller.inject = ['$scope'];
    function Controller($scope) {
        $scope.value = "Please enter data.";
        $scope.food = "";
        $scope.colour = "#000000"

        var splitInput = function (separator) {
            return separator.split(',');
        }

        // Finds split length excluding whitespaces and empty strings
        var splitLength = function (array) {
            var length = array.length;
            var x =0;
            for (x in array) {
                if (array[x].trim() == "") {
                    length-= 1;
                }
            }
            return length;
        }

        $scope.checkItem = function() {
            var array = splitInput($scope.food);
            var length = splitLength(array);
            if (length == 0){
                $scope.value = "Please enter data first.";
                $scope.colour = "red";
            }
            else if (length <= 3) {
                $scope.value = "Enjoy!";
                $scope.colour = "green";
            }
            else {
                $scope.value = "Too much!";
                $scope.colour = "green";
            }
        }
    };

})();
