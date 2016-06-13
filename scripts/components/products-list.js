angular
    .module("whatapop")
    .component("productList", {
        templateUrl:"views/products-list.html",
        controller: ProductListComponent
    });


function ProductListComponent(ProductService) {

    var selectedId = null;
    var $ctrl = this;

    // this.$routerOnActivate = function (next) {
    this.$routerOnActivate = function (next) {

        // Cargamos los productos para la vista
        ProductService.getProducts().then(function (respuesta) {
            $ctrl.productos = respuesta.data;
            selectedId = next.params.id;
        });
    };

    this.obtenerRutaImagen = ProductService.obtenerRutaImagenAbsoluta;

    this.isSelected = function(producto) {
        return (producto.id == selectedId);
    };

}