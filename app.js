(function() {
    //start of function
  var app = angular.module('ChannelSearcher', []);


app.factory('memory', [function(){
  var storage = {
  };
  return storage;
}]);//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service
    $scope.print = function(){
        console.log($scope.sera)   
    }
    
}]);//end of controller
  //end of function
})();
