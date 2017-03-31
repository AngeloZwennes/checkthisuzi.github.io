app.directive('homepageproducts', function ($window, ProductsFactory,CartFactory,Lightbox) {
    return {
        restrict: 'E',
        template: '<ul>' +
        '<div ng-repeat="product in products" class="col-md-3 col-sm-4 col-xs-6 portfolio-item">'+
            '<div class="panel panel-primary" >'+
                '<div class="panel-heading" ng-bind="product.name"></div>'+
                '<div class="panel-body" style="min-height: 38%">'+
        '<a href="#">'+
        '<img ng-click="openLightboxModal($index)" class="img-responsive" ng-src="{{product.image}}" style="max-height: 160px; min-height:160px;width:auto">'+
        '</a>'+
            '<div class="col-md-12"><h4>Productinformatie</h4 ></div>'+
            '<div class="col-md-12">{{product.information | slicedescription}}</div>'+
                '</div>'+
                '<div class="panel-footer">{{product.price | currency: "€"}}<a href="" class="btn btn-success" ng-click="addToCart(product)" style="margin-left: 20%">Add to cart</a></div>'+
        '</div>'+
        '</div>',
        scope: {
            products: '=?',
            images: '=?',
        },
        link: function (scope) {
            scope.products = ProductsFactory.getAllProducts();

            scope.addToCart = function(product){
                var snackbar = document.getElementById("snackbar");
                snackbar.className="show";
                setTimeout(function() {
                    snackbar.className = snackbar.className.replace("show", "");
                },1000);
              CartFactory.addToCart(product);
            };

            scope.openLightboxModal = function (index) {
                var product = scope.products[index];
                Lightbox.templateUrl = "views/productDialog.html";
                Lightbox.getImageUrl = function(){
                    return product.image;
                }
                Lightbox.getImageCaption = function(){
                    return product.information;
                }
                Lightbox.calculateImageDimensionLimits = function (dimensions) {
                    return {
                        'maxWidth': dimensions.windowWidth >= 768 ? // default
                        dimensions.windowWidth - 92 :
                        dimensions.windowWidth - 52,
                        'maxHeight': 1600                           // custom
                    };
                };

                // the modal height calculation has to be changed since our custom template is
                // taller than the default template
                Lightbox.calculateModalDimensions = function (dimensions) {
                    var width = Math.max(400, dimensions.imageDisplayWidth + 32);

                    if (width >= dimensions.windowWidth - 20 || dimensions.windowWidth < 768) {
                        width = 'auto';
                    }

                    return {
                        'width': width,                             // default
                        'height': 'auto'                            // custom
                    };
                };
                Lightbox.keyboardNavEnabled = false;
                Lightbox.openModal( scope.products, index);
            };
        }
    }
});