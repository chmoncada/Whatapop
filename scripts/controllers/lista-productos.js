// Hacer inject de dependencias
angular.module("whatapop").controller("ListaProductos", function ($scope, ProductService) {

    ProductService.getProducts().then(function(respuesta) {
        $scope.productos = respuesta.data;
    });

    //Guardamos los productos

    $scope.guardarProducto = function () {

        var producto = {
            name: $scope.nombreProducto
        };

        ProductService.saveProduct(producto).then(function (respuesta) {

            $scope.productos.push(respuesta.data);
        });
    };
});