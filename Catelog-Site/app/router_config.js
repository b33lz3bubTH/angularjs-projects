app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "app/views/main.htm"
  })
  .when("/products", {
    templateUrl : "app/views/products.htm"
  })
  .when("/about", {
    templateUrl : "app/views/about_us.htm",
    controller: 'aboutCtrl'
  })
});