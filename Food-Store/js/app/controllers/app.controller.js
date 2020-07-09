foodModule.controller("mainCtrl",function($scope,$rootScope){
    // very Imp function, never touch it //
    $rootScope.selectProduct = function(obj){
        _selectProduct(obj);
    }
    $rootScope.isSelected = function(icode){
        return _isSelected(icode);
    }
});
foodModule.controller("indexCtrl",function($scope){
    $scope.title = "Index Page";
});
foodModule.controller("drinkCtrl",function($scope,$rootScope,getDatabaseApi){
    $scope.title = "Drink Section";
    getDatabaseApi.getDB("drink").then(function(data){
      $scope.food = data;
    });
});
foodModule.controller("fastfoodCtrl",function($scope,$rootScope,getDatabaseApi){
    $scope.title = "Fast Food Coner";
    getDatabaseApi.getDB("fastfood").then(function(data){
      $scope.food = data;
    });
});
foodModule.controller("detailCtrl", function($scope,$routeParams){
  $scope.icode_value = $routeParams.icode;
});
foodModule.controller("orderCtrl",function($scope){
    $scope.title = "This is Drink Controller";
    $scope.selectedFood = selectedItemDB;
    $scope.totalPrice = 0;
    $scope.update_total = function(){
      $scope.totalPrice = 0;
      for(i=0;i<$scope.selectedFood.length;i++){
        if($scope.selectedFood[i].quantity >= 1){
          $scope.totalPrice += ($scope.selectedFood[i].price * $scope.selectedFood[i].quantity);
        }else{
          $scope.selectedFood[i].quantity = 1;
          $scope.update_total();
        }
      }
      $scope.totalPrice = $scope.totalPrice;
    }
    $scope.setQuantity = function(){
        for(i=0;i<$scope.selectedFood.length;i++){
            $scope.selectedFood[i].quantity = 1;
            $scope.totalPrice = $scope.totalPrice + ($scope.selectedFood[i].price * $scope.selectedFood[i].quantity);
        }
    }
    $scope.setQuantity();
    $scope.removeItems = function(obj){
        $scope.selectedFood = _selectProduct(obj);
        $scope.update_total();
    }
});
