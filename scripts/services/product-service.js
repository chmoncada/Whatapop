
angular
    .module("whatapop")
    .service("ProductService", function($http, Properties) {

        var productsPromise = $http.get(Properties.urlServidor + Properties.endpointProducts);

        // Obtenemos los productos
        this.getProducts = function() {
            return productsPromise;
        };

        // Obtenemos solo el producto para la vista de detalle
        this.getProduct = function(id) {
            ruta = Properties.urlServidor + Properties.endpointProducts + "/" + id;
            var productPromise =  $http.get(ruta);
            return productPromise;
        };


        // Guardamos el producto
        this.saveProduct = function (producto) {
            return $http.post(Properties.urlServidor + Properties.endpointProducts, producto);
        };

        // obtenemos ruta absoluta
        this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

            return rutaRelativa
                ? (Properties.urlServidor + "/" + rutaRelativa)
                : undefined;
        };

    });