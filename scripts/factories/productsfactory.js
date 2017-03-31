app.factory('ProductsFactory',function(GUIDFactory){

    function getAllProducts(){
        var localProducts = JSON.parse(localStorage.getItem("products"));
        if(localProducts == undefined || localProducts.length < 0){
            localProducts = [];
            localStorage.setItem("products",JSON.stringify(localProducts));
        }
        var products = JSON.parse(localStorage.getItem("products"));
        return JSON.parse(localStorage.getItem("products"));
    };

    function addProduct(product){
        product.id = GUIDFactory.getGUID();
        var localProducts = JSON.parse(localStorage.getItem("products"));
        localProducts.push(product);
        localStorage.setItem("products",JSON.stringify(localProducts));
    }
    function deleteProduct(products){
        localStorage.removeItem("products");
        localStorage.setItem("products",JSON.stringify(products));
    }
    function getSelectedProductIndex(){
        return JSON.parse(localStorage.getItem("selectedProduct"));
    }
    function getProduct(){
        var localProducts = JSON.parse(localStorage.getItem("products"));
        return localProducts[JSON.parse(localStorage.getItem("selectedProduct"))];
    }
    function editProduct(product){
        localStorage.setItem("selectedProduct",JSON.stringify(product));
    }
    function saveProduct(product){
        var localProducts = JSON.parse(localStorage.getItem("products"));
        var index = getSelectedProductIndex();
        localProducts.splice(index,1);
        var newProduct = {
            "name": product.name,
            "information": product.information,
            "image": product.image,
            "price": product.price
        }
        localProducts.push(newProduct);
        localStorage.removeItem("products");
        localStorage.setItem("products",JSON.stringify(localProducts));
    }
    return {
        getAllProducts: getAllProducts,
        deleteProduct: deleteProduct,
        getSelectedProductIndex : getSelectedProductIndex,
        saveProduct: saveProduct,
        getProduct: getProduct,
        editProduct: editProduct,
        addProduct: addProduct
    };
});
