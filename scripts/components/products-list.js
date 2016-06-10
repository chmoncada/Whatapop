angular
    .module("whatapop")
    .component("productList", {
        templateUrl:"views/products-list.html",
        controller: ["ProductService", function (ProductService) {

            var self = this;

            ProductService.getProducts().then(function(respuesta) {
                self.productos = respuesta.data;
            });
        }]
    });