(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCtr', LunchCtr);

LunchCtr.$inject = ['$scope', '$filter'];
function LunchCtr($scope, $filter) {
    $scope.message = "";
    $scope.menu = "";
    
    $scope.check = function(){
      console.log("check called:" + $scope.menu);
      if($scope.menu === ""){
        $scope.message = "Please Enter data first!";  
      }
      else{
        let splitmenu = $scope.menu.split(',');
        console.log("menu lenght = " + splitmenu.length)
        if( splitmenu.length > 3 ){
            $scope.message="Too Much!";
        }
          else{
              $scope.message="Enjoy";
          }
      }
  };
};
})();
