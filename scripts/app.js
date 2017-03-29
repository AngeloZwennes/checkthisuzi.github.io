var app = angular.module('angular-store', ['ngRoute','ui.bootstrap','bootstrapLightbox']);

app.config(function($routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when("/home", {
            templateUrl : "views/home.html",
            controller: "HomeController"
        })
        .when("/products", {
            templateUrl : "views/products.html",
            controller: "ProductController"
        })
        .when("/products/AddProduct", {
            templateUrl: "views/addProduct.html",
            controller: "ManageProductController",
            addProduct: true
        })
        .when("/products/EditProduct", {
            templateUrl: "views/editProduct.html",
            controller: "ManageProductController",
            addProduct: false
        })
        .when("/customers", {
            templateUrl : "views/customers.html",
            controller: "CustomerController"
        })
        .when("/customers/AddCustomer",{
            templateUrl : "views/addCustomer.html",
            controller  : "ManageCustomerController",
            addCustomer : true
        })
        .when("/customers/EditCustomer",{
            templateUrl : "views/editCustomer.html",
            controller  : "ManageCustomerController",
            addCustomer : false
        })
        .when("/cart",{
            templateUrl : "views/shoppingCart.html",
            controller: "CartController"
        })
        .when("/orders",{
            templateUrl : "views/orders.html",
            controller: "OrdersController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});