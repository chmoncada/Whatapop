angular
    .module("whatapop")
    .component("productDetails", {
        templateUrl:"views/product-details.html",
        bindings: { $router: '<' },
        controller: ProductDetailComponent
    });

function ProductDetailComponent(ProductService,$sce) {

    var $ctrl = this;

    this.$routerOnActivate = function(next) {
        var id = next.params.id;
        console.log(id);

        ProductService.getProduct(id).then(function(respuesta) {
            $ctrl.product = respuesta.data;
            $ctrl.description = $ctrl.product.description;

        });
    };

    this.getHtml = function (html) {
        return $sce.trustAsHtml(html);
    };

    this.gotoProducts = function () {
        var productId = this.product && this.product.id;
        this.$router.navigate(['ProductsList', {id:productId}]);
    };
}