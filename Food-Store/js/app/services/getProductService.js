foodModule.service("getDatabaseApi", function($http,$q) {
  this.getDB = function(uri){
    var products = [];
    var query = "DB/"+uri+".js";
    var defer = $q.defer();
    $http({
        method : "GET",
        url : query
    }).then(function mySuccess(response) {
        products = angular.fromJson(response.data);
        defer.resolve(products);
    }, function myError(response) {
        products = [];
        console.log("Not Working!");
    });
    return defer.promise;
  }
});
