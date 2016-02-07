# twitch

# Takeaways

 - CSS -> Tabs within Boundaries
 - CSS -> Line Height and floats for ```[Avatar] Username     [status]```


 - filtering upon ng-repeat
 
 ```
 data-ng-repeat="user in storage.combinedUsers | filter:sera" -> 'sera' = ng-model for name search.
 ```
 ```
 data-ng-repeat="user in offlineUsers = (storage.combinedUsers | offline)
 ```
 
- 2x API Search for User info and User Status. -> merged "User info" and "User status" via 'extend' function.
  
  ```
  //courtesy https://plainjs.com/javascript/utilities/merge-two-javascript-objects-19/
function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}
  ...
          $http.jsonp(baseUrl + profileExt + users[i] + "?callback=JSON_CALLBACK").success(function(data1) {//pull profile info
            $http.jsonp(baseUrl + statusExt + data1.name + "?callback=JSON_CALLBACK").success(function(data2) {//then pull status info
               storage.combinedUsers.push(extend(data1,data2)); 
  ..
  ```
  
  
