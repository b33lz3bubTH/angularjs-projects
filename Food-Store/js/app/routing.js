foodModule.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "js/app/views/index.html",
      controller : "indexCtrl"
    })
    .when("/fastfood", {
      templateUrl : "js/app/views/displayFood.html",
      controller : "fastfoodCtrl"
    })
    .when("/drinks", {
      templateUrl : "js/app/views/displayFood.html",
      controller : "drinkCtrl"
    })
    .when("/detail/:icode", {
      templateUrl : "js/app/views/detail.html",
      controller : "detailCtrl"
    })
    .when("/order", {
      templateUrl : "js/app/views/order.html",
      controller : "orderCtrl"
    });
});
