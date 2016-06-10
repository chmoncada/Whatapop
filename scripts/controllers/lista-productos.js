// Hacer inject de dependencias
angular.module("whatapop").controller("ListaProductos", function ($scope, ProductService) {

    // $scope.productos = ProductService.getProducts();

    ProductService.getProducts().then(function(respuesta) {
        $scope.productos = respuesta.data;
    })
});