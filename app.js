(function() {
    //start of function
  var app = angular.module('ChannelSearcher', ['filters']);

app.factory('memory', function($http){

  var baseUrl = "https://api.twitch.tv/kraken/";

  var users = ["freecodecamp","tentuzero","watchgintama","lordstormakov", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin",
"comster404" ];

  var storage = {};
  storage.combinedUsers = [];
//courtesy https://plainjs.com/javascript/utilities/merge-two-javascript-objects-19/
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
        $http.jsonp(baseUrl + profileExt + users[i] + "?callback=JSON_CALLBACK").success(function(data1) {//pull profile info
            $http.jsonp(baseUrl + statusExt + data1.name + "?callback=JSON_CALLBACK").success(function(data2) {//then pull status info
               storage.combinedUsers.push(extend(data1,data2));                                                     //then merge them all together
            }).error(function(data2) {
               storage.combinedUsers = [];//error = no data anyways
               console.log("error1");
            });
        }).error(function(data1) {
           storage.combinedUsers = [];//error = no data anyways
           console.log("error0");
        });
    }//end info pulling

  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service
    $scope.baseTwitchURL = "http://www.twitch.tv/";//use for links
    /*$scope.print = function(){
        console.log($scope.storage.combinedUsers);
    }*///for debug use, to find user info
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
