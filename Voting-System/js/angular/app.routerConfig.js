myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "/js/angular/views/homepage.htm"
    })
    .when("/votecounter", {
      templateUrl : "/js/angular/views/checkvotes.htm",
      controller: "voteCount"
    })
    .when("/castVote", {
      templateUrl : "/js/angular/views/castVote.htm",
      controller: "castVote",
      resolve: {
        "check": function($rootScope,$location){
          if(!$rootScope.loggedStatus){
              $location.path("/login");
          }
        }
      }
    })
    .when("/login", {
      templateUrl : "/js/angular/views/login.htm",
      controller: "loginCtrl"
    });
  });