(function() {
    //start of function
  var app = angular.module('ChannelSearcher', []);

app.factory('memory', function($http){

  var baseUrl = "https://api.twitch.tv/kraken/";

  var users = ["freecodecamp","tentuzero","watchgintama","lordstormakov"];

  var storage = {};
  storage.profileInfos = [];
  storage.onlineStatuses = [];

    for (var i=0;i<users.length;i++){
       var profileExt = "users/";
       var statusExt = "streams/";

        $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
        $http.jsonp(baseUrl + profileExt + users[i] + "?callback=JSON_CALLBACK").success(function(data) {
           storage.profileInfos.push(data);
        }).error(function(data) {
           storage.profileInfos = [];
           console.log("error0");
        });
        $http.jsonp(baseUrl + statusExt + users[i] + "?callback=JSON_CALLBACK").success(function(data) {
           storage.onlineStatuses.push(data);
        }).error(function(data) {
           storage.onlineStatuses = [];
           console.log("error1");
        });

    }

  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service
    $scope.print = function(){
        console.log($scope.storage.profileInfos)
    }

}]);//end of controller
  //end of function
})();
