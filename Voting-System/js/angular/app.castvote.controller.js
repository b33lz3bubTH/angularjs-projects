myApp.controller('castVote', function($scope,$rootScope) {
    $scope.candidates = [
        {
            "name" : "NOTA",
            "symbol" : 'NOTA.jpg',
            "party_name": 'NONE OF THE ABOVE',
            "party_code" : "NOTA",
            "manifesto": "I there by quote;i cast my vote to NOTA."
        },
        {
            "name" : "Chayan Manjhi",
            "symbol" : 'communist.jpeg',
            "party_name": 'Akhil Bharatiya Vidya Parishad',
            "party_code" : "AVBP",
            "manifesto": "Our vision is to improve the quality of education"
        },
        {
            "name" : "Sourav Ahmed",
            "symbol" : 'netaji.jpeg',
            "party_name": 'The National Students Union Of INDIA',
            "party_code" : "NSUI",
            "manifesto": "Our vision is to improve the quality of education"
        },
        {
            "name" : "Rahul Biswas",
            "symbol" : 'india.jpeg',
            "party_name": 'Trinomool Chattra Parishad',
            "party_code" : "TMCP",
            "manifesto": "Our vision is to improve the quality of education"
        },
        {
            "name" : "Imran Tarafdar",
            "symbol" : 'peace.jpg',
            "party_name": 'Communist Party of INDIA (STUDENT UNION)',
            "party_code" : "CPI(SU)",
            "manifesto": "Our vision is to improve the quality of education"
        }
    ];
    $scope.vote = function(x){
       $rootScope.EVMVoteCounter[x]++;
       $rootScope.voteDisable = true;
       localStorage.setItem("VoteCounts", JSON.stringify($rootScope.EVMVoteCounter));
       //$rootScope.loggedStu;
       if(localStorage.getItem("Voters") !== null){
           let y = localStorage.getItem("Voters");
           y += (',' + $rootScope.loggedStu);
           localStorage.setItem("Voters",y);
        //    console.log("Next time");
       }else{
            localStorage.setItem("Voters",$rootScope.loggedStu);
            // console.log("first Time");
       }
    }
    var checkVote = function(){
        if(localStorage.getItem("Voters") !== null){
            let y = localStorage.getItem("Voters").split(",");
            for(var i = 0; i< y.length;i++){
                if($rootScope.loggedStu === y[i]){
                    return true;
                }
            }
            return false;
        }
        return false;
    }
    $rootScope.voteDisable = checkVote();
  });