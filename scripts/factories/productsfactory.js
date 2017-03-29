app.factory('ProductsFactory',function(){

    function getAllProducts(){
        var localProducts = JSON.parse(localStorage.getItem("products"));
        //localStorage.clear();
        if(localProducts == undefined || localProducts.length < 0){
            localProducts = [
                {
                    "name": "Soep",
                    "information": "blabla",
                    "image": "http://www.bufkes.nl/application/vanmelik-bufkes/cache/image/ratio/800/600/-Bufkes-Afbeeldingen-Producten_webshop-soepen-Soepen_2015-Tomatensoep_web.jpg",
                    "price": 1.20
                },
                {
                    "name": "Kaas",
                    "information": "blabla",
                    "image": "http://images.smulweb.nl/wiki/301/high_res/kaas-large.jpg",
                    "price": 1.20
                },
                {
                    "name": "Cola",
                    "information": "Coca-Cola is de meest favoriete frisdrank van de wereld.",
                    "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323135303337_1_LowRes_JPG.JPG",
                    "price": 1.20
                },
                {
                    "name": "Fanta",
                    "information": "blabla",
                    "image": "https://cmgtcontent.ahold.com.kpnis.nl/cmgtcontent/media//001520700/000/001520706_002_2803_708.jpg",
                    "price": 1.20
                },
                {
                    "name": "Ijsbergsla",
                    "information": "blabla",
                    "image": "http://www.ingredienten.nl/images/ingredienten/ijsbergsla-large.jpg",
                    "price": 1.20
                },
                {
                    "name": "M&M",
                    "information": "Test",
                    "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313532313339_1_LowRes_JPG.JPG",
                    "price": 1.20
                }
            ];
            localStorage.setItem("products",JSON.stringify(localProducts));
        }
        return JSON.parse(localStorage.getItem("products"));
    };

    function addProduct(product){
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