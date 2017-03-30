app.controller("ProductController", function($scope, ProductsFactory, $location) {
    $scope.products = ProductsFactory.getAllProducts();

    $scope.editProduct = function(index){
        ProductsFactory.editProduct(index);
        $location.path("/products/EditProduct");
    };

    $scope.deleteProduct = function(index){
        $scope.products.splice(index,1);
        ProductsFactory.deleteProduct($scope.products);
    };
});