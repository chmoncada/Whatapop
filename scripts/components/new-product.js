angular
    .module("whatapop")
    .component("newProduct", {
        bindings: { $router: "<" },
        templateUrl:"views/new-product.html",
        controller: function (ProductService) {

            var self = this;

            //Guardamos los productos
            self.saveProduct = function (texto) {

                var producto = {
                    name: texto
                };
                console.log(producto);

                ProductService
                    .saveProduct(producto)
                    .then(function (respuesta) {
                        console.log(self.$router);
                        
                        self.$router.navigate(["/Products"]);
                });
            };
        }
    });