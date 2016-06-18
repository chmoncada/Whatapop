
angular
    .module("whatapop")
    .service("ProductService",["$http","Properties", function($http, Properties) {

        //var productsPromise = $http.get(Properties.urlServidor + Properties.endpointProducts);
        //var userPromise = $http.get(Properties.urlServidor + Properties.endpointUsers);
        var categoryPromise = $http.get(Properties.urlServidor + Properties.endpointCategories);
        
        // Obtenemos los productos
        this.getProducts = function() {
            return $http.get(Properties.urlServidor + Properties.endpointProducts);
        };

        // Obtenemos los usuarios
        this.getUsers = function() {
            return $http.get(Properties.urlServidor + Properties.endpointUsers);
        };

        // Obtenemos los usuarios
        this.getCategories = function() {
            return categoryPromise;
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

        // Guardamos el usuario
        this.saveUser = function (usuario) {
            return $http.post(Properties.urlServidor + Properties.endpointUsers, usuario);
        };

        // obtenemos ruta absoluta
        this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

            return rutaRelativa
                ? (Properties.urlServidor + "/" + rutaRelativa)
                : undefined;
        };

        this.filteredLocation = function () {
            if($ctrl.productos) {
                return $ctrl.productos.filter(function (producto) {
                    return $ctrl.cercanos.indexOf(producto.seller.id) !== -1;
                });
            } else {
                return null;
            }
        };

    }]);