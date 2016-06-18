angular
    .module("whatapop")
    .directive('productCard',[ "ProductService", function (ProductService) {
        
        // Devolver la directiva 
        return {
            restrict: "EA",
            scope: {
                name: '@itemName',
                price: '@itemPrice',
                src: '@itemSrc',
                category: '@itemCategory',
                seller: '@itemSeller',
                id: '@id'
            },
            link: function(scope) {
                // obtenemos ruta de imagen
                scope.rutaImagen = ProductService.obtenerRutaImagenAbsoluta(scope.src);
                
                
            },
            replace: true,
            templateUrl: "views/product-card.html"
        };
}]);