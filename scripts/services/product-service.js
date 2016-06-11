
angular
    .module("whatapop")
    .service("ProductService", function($http) {

        var productsPromise = $http.get("http://localhost:8000/api/products");

        // Obtenemos los productos
        this.getProducts = function() {
            return productsPromise;
        };

        // Obtenemos solo el producto para la vista de detalle
        this.getProduct = function(id) {
            ruta = "http://localhost:8000/api/products/" + id;
            console.log(ruta);
            var productPromise =  $http.get(ruta);
            return productPromise;
        };


        // Guardamos el producto
        this.saveProduct = function (producto) {
            return $http.post("http://localhost:8000/api/products", producto);
        };

        this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

            return rutaRelativa
                ? ("http://localhost:8000/" + rutaRelativa)
                : undefined;
        };

    });