myApp.controller('voteCount', function($scope,$rootScope,$location) {
    // console.log($rootScope.EVMVoteCounter);
    $scope.chartType = "doughnut";
    var ctx = document.getElementById('myChart').getContext('2d');
    var temp = {
        type: $scope.chartType,
        data: {
            labels: Object.keys($rootScope.EVMVoteCounter),
            datasets: [{
                label: '# of Votes',
                data: Object.values($rootScope.EVMVoteCounter),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0,0, 255, 0.2)',
                    'rgba(255,127,80, 0.2)',
                    'rgba(128,128,128,0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(0,0, 255, 1)',
                    'rgba(255,127,80, 1)',
                    'rgba(128,128,128,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
    var myChart = new Chart(ctx, temp);
    $scope.logInStatus = false;
    $scope.admin_email = "";
    $scope.admin_pass = "";
    $scope.adminLogin = function(){
        if($scope.admin_email === "sourav@gmail.com" && $scope.admin_pass === "admin123"){
            $scope.logInStatus = true;
        }else{
            alert("WRONG ADMIN CREDENTIAL");
            // console.log("ERROR");
        }
    }
    $rootScope.clearData =function(){
        // console.log("called");
        localStorage.clear();
        location.reload();
    }
    // myChart.config.type
    $scope.changeChart = function(x){
        myChart.destroy();
        temp.type = x;
        myChart = new Chart(ctx, temp);
    }

    $scope.partyWinning = function(){
        // SEGMENT TO CHECK.
        try{
            var x = JSON.parse(localStorage.VoteCounts);
            // to check.
            var y  = Object.keys(x).reduce(function(a, b){ return x[a] > x[b] ? a : b }); //getting the keys of the highst value
       }catch(w){
          return "None Winning";
       }
        console.log(y);

        // mandatory STRING RETURN.
        return y;
    }
  });