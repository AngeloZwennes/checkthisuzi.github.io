app.controller("ManageProductController",function($scope,$route,ProductsFactory,$location){
   $scope.product = null;
   $scope.adding = $route.current.$$route.addProduct;

   $scope.getProduct = function(){
      $scope.product = ProductsFactory.getProduct();
   };
   $scope.updateProduct = function(){
      ProductsFactory.saveProduct($scope.product);
      $location.path("/products");
   }
   $scope.$watch($scope.adding,function(value){
      if(!$scope.adding){
         $scope.getProduct();
      } else {
         $scope.addProduct = function(product){
            ProductsFactory.addProduct(product);
            $location.path("/products");
         }
      }
   });


});