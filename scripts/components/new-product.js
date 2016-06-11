angular
    .module("whatapop")
    .component("newProduct", {
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
                        // $scope.productos.push(respuesta.data);
                });
            };
        }
    });