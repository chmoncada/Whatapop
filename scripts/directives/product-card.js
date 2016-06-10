angular
    .module("whatapop")
    .directive('productCard', function () {
        
        // Devolver la directiva 
        return {
            restrict: "EA",
            scope: {
                name: '@itemName',
                price: '@itemPrice',
                src: '@itemSrc',
                category: '@itemCategory',
                seller: '@itemSeller'
            },
            link: function(scope, ProductService) {
                scope.obtenerRutaImagen = function(src){
                    var ruta = ProductService.obtenerRutaImagenAbsoluta(src);
                    console.log(ruta);
                    return ruta;
                };
            },
            replace: true,
            templateUrl: "views/product-card.html"
        };
});