// Hacer inject de dependencias
angular.module("whatapop").controller("ListaProductos", function ($scope, ProductService) {

    ProductService.getProducts().then(function(respuesta) {
        $scope.productos = respuesta.data;
    });

    //Guardamos los productos

    $scope.guardarProducto = function (texto) {

        var producto = {
            name: texto
        };

        ProductService.saveProduct(producto).then(function (respuesta) {

            $scope.productos.push(respuesta.data);
        });
    };
});