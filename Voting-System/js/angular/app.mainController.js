var myApp = angular.module('myVoteApp', ["ngRoute"]);


myApp.controller('mainCtrl', function($scope,$rootScope,$window) {
  $rootScope.stuID = '';
  $rootScope.mobID = '';
  $rootScope.loggedStatus = false;
  $rootScope.loggedStu = 0;
  $scope.title="ONLINE VOTE APP";

  $rootScope.EVMVoteCounter = {
      "CPI(SU)":0,
      "TMCP":0,
      "NSUI":0,
      "AVBP":0,
      "NOTA":0
    };
  $rootScope.voteDisable = false;
  $scope.init = function () {
    if(localStorage.getItem("VoteCounts") !== null){
      // console.log("have in local");
      $rootScope.EVMVoteCounter = JSON.parse(localStorage.getItem("VoteCounts"));
    }
   };
});
myApp.controller('loginCtrl', function($scope,$rootScope,$location) {
  $rootScope.studentLogin = function(){
    var x = $rootScope.stuID;
    if(x.slice(0,4) === "1737"){
      if($rootScope.mobID.length === 10){
        // console.log("login sucessfull");
        $rootScope.loggedStatus = true;
        $location.path("/castVote");
        $rootScope.loggedStu = x;
      }
      else{
        alert("Mobile number is wrong");
      }
    }else{
      alert("Student ID: 1737XXXXXXXX");
    }
  }
});