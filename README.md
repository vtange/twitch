![alt tag](http://res.cloudinary.com/dmj8qtant/image/upload/c_limit,w_600/v1461879977/twitch_j5ejlc.png)
# twitch

## Tech
AngularJS + filtering

## Niceties
Merge data from 2 APIs, Real-time Name search filter

### Details
#### CSS
 - Tabs within Boundaries ``` [ All | Online | Offline ] ```
 - Line Height and floats for ```[Avatar] Username     [status]```
```
.avatar{
    width:50px;
    >height:50px;
    border-radius: 50%;
}
.playing {
    position: absolute;
    padding-left: 10px;
    bottom:12px;
}
.username {
    position: absolute;
    padding-left: 10px;
    >line-height: 50px;
    color: #F47564;
}
.onOff {
    position: absolute;
    right:20;
    >line-height: 50px;
    color: #F47564;
    display: inline-block;
}
```
#### JS
- 'sera' = ng-model for name search.
 ```
 data-ng-repeat="user in storage.combinedUsers | filter:sera"
 ```
 ```
 data-ng-repeat="user in offlineUsers = (storage.combinedUsers | offline)
 ```
 
- Merge 2 API Search results for User info and User Status. via 'extend' function.
  
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
  
  
