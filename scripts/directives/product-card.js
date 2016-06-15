angular
    .module("whatapop")
    .directive('productCard', function (ProductService, $localStorage) {
        
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
});