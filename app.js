(function() {
    //start of function
  var app = angular.module('ChannelSearcher', []);


app.factory('memory', function($http){
  var storage = {}

  storage.the_good_stuff = {};

    var url = "https://api.twitch.tv/kraken/streams?channel=freecodecamp&callback=JSON_CALLBACK";
    $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
    $http.jsonp(url).success(function(data) {
       storage.the_good_stuff = data;
    }).error(function(data) {
       storage.the_good_stuff = {};
    });

  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service
    $scope.print = function(){
        console.log($scope.sera)   
    }
    
}]);//end of controller
  //end of function
})();
