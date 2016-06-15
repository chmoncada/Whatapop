angular
    .module("whatapop")
    .component("productDetails", {
        templateUrl:"views/product-details.html",
        bindings: { $router: '<' },
        controller: ProductDetailComponent
    });

function ProductDetailComponent(ProductService,$sce, $filter,$scope, $localStorage, $sessionStorage) {

    var $ctrl = this;
    
    // Cargar la vista inicial
    this.$routerOnActivate = function(next) {
        
        //Recuperamos el index del producto de la otra vista
        var id = next.params.id;

        // En vez de trabajar con el JSON de productos, hacemos una llamada a la API por el
        // Objecto especifico con index i
        ProductService.getProduct(id).then(function(respuesta) {
            $ctrl.product = respuesta.data;
            // Grabamos en una variable el campo HTML
            $ctrl.description = $ctrl.product.description;
            // Obtenemos la ruta de la foto de la imagen
            $ctrl.ruta = $ctrl.product.photos[0];

        });
    };

    // Funcion para autorizar el mostrar el campo HTML en la vista
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

    //Inicializamos el storage de favoritos si no existe

    if ($localStorage.favorites === undefined) {
        $localStorage.favorites = [];
    };
    
    // trabajamos mejor con una variable en el $scope asi la podemos leer en otras vistas
    $scope.localStorage = $localStorage;

    // inicializamos el status de favorito
    // $ctrl.checked = false;

    // Funcion para anadir al localstorage, se uso la dependencia ngStorage
    $ctrl.addToFavorites = function(index) {
        if($localStorage.favorites.indexOf(index) !== -1){
            console.log("BORRADO DEL ARRAY");
            var start = $localStorage.favorites.indexOf(index);
            $localStorage.favorites.splice(start,1);
        } else {
            console.log("AÑADIDO AL ARRAY");
            $localStorage.favorites.push(index);
        }
    };

}