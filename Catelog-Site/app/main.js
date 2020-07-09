var app = angular.module('myApp', ["ngRoute"]);

app.controller('myCtrl', function($scope, $http) {
  $scope.siteName = "Susanta Chakraborty";
  $scope.show = false;
  $scope.products = [
        {
            "name": "Elish mach",
            "imgSrc": "assest/images/prod/1.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "talapiya mach",
            "imgSrc": "assest/images/prod/2.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "pabda mach",
            "imgSrc": "assest/images/prod/3.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "kakra",
            "imgSrc": "assest/images/prod/4.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "janto katla mach",
            "imgSrc": "assest/images/prod/5.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "koi mach",
            "imgSrc": "assest/images/prod/6.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "boal mach",
            "imgSrc": "assest/images/prod/7.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "pomplate mach",
            "imgSrc": "assest/images/prod/8.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "pabda mach",
            "imgSrc": "assest/images/prod/9.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        // {
        //     "name": "katla mach",
        //     "imgSrc": "assest/images/prod/10.jpeg",
        //     "price": 1005,
        //     "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        // },
        {
            "name": "Janto Katla Mach",
            "imgSrc": "assest/images/prod/11.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },
        {
            "name": "Tangra Mach",
            "imgSrc": "assest/images/prod/12.jpeg",
            "price": 1005,
            "desc": " ullam fugiat sapiente illo inventore dolore dolor voluptatem hic aliquam rem iste dicta voluptas"
        },

    ]
    
    $scope.changeBanner = function(){
        var x = document.getElementsByClassName('selector-x')[0];
        x.classList.add('newHeader');
    }   
});

app.controller('aboutCtrl', function($scope, $routeParams) {
	
});