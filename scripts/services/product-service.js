
angular
    .module("whatapop")
    .service("ProductService", function($http) {
        
        // Obtenemos los productos
        this.getProducts = function() {
            return $http.get("http://localhost:8000/api/products");

        };
        
        // Guardamos el producto
        this.saveProduct = function (producto) {
            return $http.post("http://localhost:8000/api/products", producto);
        };
    
    
    });