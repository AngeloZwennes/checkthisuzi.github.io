app.controller("ProductController", function($scope, ProductsFactory, $location) {
    $scope.products = ProductsFactory.getAllProducts();
    console.log($scope.products);

    $scope.editProduct = function(index){
        ProductsFactory.editProduct(index);
        $location.path("/products/EditProduct");
    };

    $scope.deleteProduct = function(index){
        $scope.products.splice(index,1);
        ProductsFactory.deleteProduct($scope.products);
    };
});