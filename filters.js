(function() {
    //start of function
var filters=angular.module('filters', []);
filters.filter('online', function() {
    return function(input) {
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if(input[i].stream != null){
                out.push(input[i]);
            }
        }
        return out;
    }
});
filters.filter('offline', function() {
    return function(input) {
        var out = [];
        for (var j = 0; j < input.length; j++) {
            if(input[j].stream == null){
                out.push(input[j]);
            }
        }
        return out;
    }
});

      //end of function
})();