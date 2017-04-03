app.factory('ProductsFactory',function(GUIDFactory){

    function getAllProducts(){
        var localProducts = JSON.parse(localStorage.getItem("products"));
        if(localProducts == undefined || localProducts.length < 0){
            localProducts = [{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323733373037_1_LowRes_JPG.JPG","price":1.35,"information":"Perziken behoren tot de toppers uit het Haribo assortiment. Fijne zachte fruitgom met een perzik smaak.\nZachte fruitgom in perziksmaak met een suikerlaagje\nGeliefd door jong en oud\nHoogwaardige kwaliteit","name":"Haribo Perziken","id":"9fe8ef16-0591-4416-6d91-b7752f197aa2","$$hashKey":"object:176"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323235323238_2_LowRes_JPG.JPG","price":9.99,"name":"Page Original toiletpapier","information":"Page toiletpapier is natuurlijk zacht en sterk. Bovendien heeft het zachte papier een leuke puppy print. Kortom ideaal voor het hele gezin!\nZacht en Sterk\nPuppy-print\nFSC-keurmerk","id":"f5413a41-d659-4104-8a09-38409d40df1f","$$hashKey":"object:177"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313130363934_1_LowRes_JPG.JPG","price":1.75,"name":"Heinz Tomato ketchup","information":"Heinz Tomato ketchup is de welbekende ketchup gemaakt van echte Heinz tomaten.\nMet 148 gram tomaten per 100 gram tomato ketchup\nMet handige doseerdop, nooit meer knoeien\nVrij van conserveermiddelen","id":"1a4a6647-35aa-4f97-d332-f0ed14f290de","$$hashKey":"object:178"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323632303932_1_LowRes_JPG.JPG","price":1.64,"information":"Heerlijk geroosterde pinda's\nBevat 7-8 porties","name":"Duyvis Oven roasted pinda's","id":"87cfbebb-67d6-4a5c-5b78-3f31a13c0883","$$hashKey":"object:179"},{"image":"https://cmgtcontent.ahold.com.kpnis.nl/cmgtcontent/media//001204900/000/001204904_006_2780_708.jpg","price":1.71,"information":"De originele Pepsi smaak.\nDe echte Pepsi smaak\nIdeaal voor feestjes\nDe enige echte originele Pepsi.","name":"Pepsi cola Regular","id":"1af10a5d-ef74-404d-1ac2-4c07f4fbc06d","$$hashKey":"object:180"},{"name":"Fanta Orange","image":"https://cmgtcontent.ahold.com.kpnis.nl/cmgtcontent/media//001520700/000/001520706_002_2803_708.jpg","price":1.83,"information":"Fanta orange is een combinatie van sprankelend water en echt vruchtensap, met natuurlijke aroma's, zonder toegevoegde kleurstoffen.\nfrisdrank met sinaasappelsmaak\nmet natuurlijke aroma's\ngeen toevoegde kleurstoffen \nBewaar Fanta op een droge schone plaats uit de zon. Fanta smaakt ijskoud het lekkerst.","id":"a1b5dc41-7cca-49d3-b8cc-1e39b67b87fd","$$hashKey":"object:181"},{"image":"https://cmgtcontent.ahold.com.kpnis.nl/cmgtcontent/media//001701500/000/001701580_002_409460_708.jpg","name":"Sprite Regular","price":1.83,"information":"Probeer de geweldige Sprite-smaak, zonder suiker & calorieën. Sprite is de frisdrank met verfrissende citroen-limoen smaak. .Sprite, Born to Refresh!\nGeweldige smaak\n100% natuurlijke fruitsmaken\nZonder suiker-zonder calorieën","id":"20168108-d48c-4212-0fd1-6fb3617ee176","$$hashKey":"object:182"},{"image":"https://cmgtcontent.ahold.com.kpnis.nl/cmgtcontent/media//001124400/000/001124440_002_226246_708.jpg","name":"Hellmann's Mayonaise","information":"Hellmann’s Real haalt het beste uit je gerecht naar boven.\nProef de unieke smaak van Hellmann’s\nGemaakt van pure ingrediënten \nGemaakt van pure ingrediënten \nHet heeft een onmiskenbare frisse smaak en een stevige structuur","price":2.79,"id":"cfda63b6-96cb-480d-f59a-67ff895534de","$$hashKey":"object:183"},{"name":"Haribo Starmix","image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50303437363236_1_LowRes_JPG.JPG","price":2.35,"information":"Starmix is een mix tussen fruitgom en schuim snoepjes.\nEen fijne mix met leuke vormpjes, zoals bijvoorbeeld hartjes en eitjes\nHanidge uitdeelverpakking","id":"c93027d0-1ecf-46fe-ba9d-65bbdb08661c","$$hashKey":"object:184"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313936303032_1_LowRes_JPG.JPG","name":"Red Band Dropfruit duo's","information":"DropFruit Duo's, de enige echte originele combinatie van drop- en fruitsmaak in één snoepje.\nNatuurlijke kleurstoffen\nRed Band, als je voor pret bent!","price":1.56,"id":"fd8101c1-13ef-475f-7d51-c544b1941da7","$$hashKey":"object:185"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50303439323231_3_LowRes_JPG.JPG","name":"Red bull Regular 4x","information":"Red Bull Energy Drink is speciaal ontwikkeld voor momenten waarop je meer wilt presteren.\nStimuleert lichaam en geest\nEnergie voor nu en later\nRed Bull geeft je vleugels wanneer jij ze nodig hebt. Ijskoud het lekkerst!","price":4.99,"id":"79334029-f429-4610-3790-863298392fe0","$$hashKey":"object:186"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323734343838_1_LowRes_JPG.JPG","name":"Lay's Paprika","information":"De enige echte Lay's chips met paprikasmaak\nZonder kunstmatige kleurstoffen en conserveringsmiddelen\nZonder toegevoegde smaakversterkers\nBevat 7-8 porties","price":1.29,"id":"44c5c8a6-9b10-4204-6c4e-6b5c43151f33","$$hashKey":"object:187"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313838393439_4_LowRes_JPG.JPG","name":"Doritos Sweet chilli pepper","information":"Doritos is een superkrokante tortillachip gemaakt van versgeroosterde maïs, met de heerlijke smaak van Sweet chili pepper\nElke chip zorgt keer op keer voor een explosie van smaak en heeft een maximale kraak!","price":1.25,"id":"77bc21cb-19af-4521-0672-3a1b52d30bc3","$$hashKey":"object:188"},{"image":"https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313236383635_2_LowRes_JPG.JPG","name":"Guacamole","information":"Guacamole verrijkt met tomaat, ui, jalapeño en een pittige kruidenmix. Probeer onze guacamole eens met Hollandse garnalen, gerookte zalm, in een wrap of op een sandwich.\nVol en romig\nBij de BBQ is guacamole ondertussen ook een klassieker\nGuacamole is meer dan een dip! Dankzij de veelzijdigheid van guacamole zijn er steeds nieuwe combinaties te ontdekken.","price":3,"id":"6c79a114-a57a-47a0-78fb-63bf3623dbf8","$$hashKey":"object:189"},{"name":"test","information":"","price":2}];
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
