angular
    .module("whatapop")
    .component("productDetails", {
        templateUrl:"views/product-details.html",
        bindings: { $router: '<' },
        controller: ProductDetailComponent
    });

function ProductDetailComponent(ProductService,$sce, $filter) {

    var $ctrl = this;

    this.$routerOnActivate = function(next) {
        var id = next.params.id;

        ProductService.getProduct(id).then(function(respuesta) {
            $ctrl.product = respuesta.data;
            $ctrl.description = $ctrl.product.description;
            $ctrl.ruta = $ctrl.product.photos[0];

        });
    };

    this.getHtml = function (html) {
        return $sce.trustAsHtml(html);
    };

    // Obtener la ruta absoluta
    $ctrl.obtenerRutaImagen = ProductService.obtenerRutaImagenAbsoluta;

    // Para regresar a la vista principal
    this.gotoProducts = function () {
        var productId = this.product && this.product.id;
        this.$router.navigate(['ProductsList', {id:productId}]);
    };
}