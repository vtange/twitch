(function() {
    //start of function
  var app = angular.module('ChannelSearcher', ['filters']);

app.factory('memory', function($http){

  var baseUrl = "https://api.twitch.tv/kraken/";

  var users = ["freecodecamp","tentuzero","watchgintama","lordstormakov", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin",
"comster404" ];

  var storage = {};
  storage.combinedUsers = [];

function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

    for (var i=0;i<users.length;i++){
       var profileExt = "users/";
       var statusExt = "streams/";

        $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
        $http.jsonp(baseUrl + profileExt + users[i] + "?callback=JSON_CALLBACK").success(function(data1) {
            $http.jsonp(baseUrl + statusExt + data1.name + "?callback=JSON_CALLBACK").success(function(data2) {
               storage.combinedUsers.push(extend(data1,data2));
            }).error(function(data) {
               storage.combinedUsers = [];
               console.log("error1");
            });
        }).error(function(data) {
           storage.combinedUsers = [];
           console.log("error0");
        });
    }//end info pulling

  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service
    $scope.baseTwitchURL = "http://www.twitch.tv/";
    $scope.print = function(){
        console.log($scope.storage.combinedUsers);
    }
    $scope.checkOnline = function(user){
        if (user.stream == null) {
            return false;
        }
        else {
         return true;
        };
    }
    $scope.checkLogo = function(user){
        if (user.logo == null) {
            return false;
        }
        else {
         return true;
        };
    }
      //tabs
      $scope.Tab = 1;
      $scope.changeTab = function(tgtTab){
          $scope.Tab = tgtTab;
          console.log("now on tab" + tgtTab)
      };
      $scope.checkTab = function(tab){
          return $scope.Tab === tab;
      };
}]);//end of controller
  //end of function
})();
