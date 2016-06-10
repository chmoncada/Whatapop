
angular
    .module("whatapop")
    .service("ProductService", function($http) {
        this.getProducts = function() {
            return $http.get("http://localhost:8000/api/products");

            // return [{
            //     name: "uncharted"
            // }, {
            //     name: "iphone"
            // }, {
            //     name: "subaru"
            // }]
    }; });