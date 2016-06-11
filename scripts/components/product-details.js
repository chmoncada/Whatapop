angular
    .module("whatapop")
    .component("productDetails", {
        templateUrl:"views/product-details.html",
        controller: ["ProductService", function (ProductService) {

          //
            var self = this;
            
            self.productDetails = function (id) {
                ProductService.getProduct(id).then(function(respuesta) {
                    self.producto = respuesta.data;
                });                
            };
            
        }]
        
    });