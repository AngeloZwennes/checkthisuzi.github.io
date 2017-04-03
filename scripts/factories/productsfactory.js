app.factory('ProductsFactory',function(GUIDFactory){

    function getAllProducts(){
        var localProducts = JSON.parse(localStorage.getItem("products"));
        if(localProducts == undefined || localProducts.length < 0){
            localProducts = [
                {
                    "name": "Pepsi Cola",
                    "information" : "De originele Pepsi smaak. De echte Pepsi smaak Ideaal voor feestjes De enige echte originele Pepsi.",
                    "price": 1.70,
                    "image": "https://cmgtcontent.ahold.com.kpnis.nl/cmgtcontent/media//001204900/000/001204904_006_2780_708.jpg",
                    "id": "1a4a6647-35aa-4f97-d332-f0ed14f290de"
                },
                {
                    "name": "Duyvis Pinda's",
                    "information": "Heerlijk geroosterde pinda's Bevat 7-8 porties, super lekker voor thuis op de bank tijdens een film ofzo",
                    "price": 1.50,
                    "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323632303932_1_LowRes_JPG.JPG",
                    "id": "87cfbebb-67d6-4a5c-5b78-3f31a13c0883"
                }
            ];
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
