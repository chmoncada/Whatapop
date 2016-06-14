angular
    .module("whatapop")
    .component("productList", {
        templateUrl:"views/products-list.html",
        bindings: {
          cercanos: '<'
        },
        controller: ProductListComponent
    });

// inyectamos los componentes
function ProductListComponent(ProductService, $haversine, $filter, $rootScope) {

    var selectedId = null;
    var $ctrl = this;

    $ctrl.filtroDistancia = null;

    // recuperamos los arrays para las vistas
    this.$routerOnActivate = function (next) {

        ProductService.getUsers().then(function (respuesta) {
            $ctrl.users = respuesta.data;
            console.log($ctrl.users);
            $ctrl.cercanos=[1,2,3,4,5,6];
            ProductService.getProducts().then(function (respuesta) {
                $ctrl.productos = respuesta.data;
                selectedId = next.params.id;

            });
        });

    };


    this.obtenerRutaImagen = ProductService.obtenerRutaImagenAbsoluta;

    this.geoPosition = function () {

        if (navigator.geolocation) {

            // Solicitamos la posición.
            navigator.geolocation.getCurrentPosition(

                // En caso de obtener la posición.
                function(datos) {

                    var coord1 = {
                        "latitude": datos.coords.latitude,
                        "longitude": datos.coords.longitude
                    };

                    // Prueba
                    var coord2 = {};
                    $ctrl.cercanos = [];

                    var distance = $haversine.distance(coord1, coord2);

                    for(var i=0; i< $ctrl.users.length; i++) {
                        var coord2 = {
                            "latitude": $ctrl.users[i].latitude,
                            "longitude": $ctrl.users[i].longitude
                        }
                        distance = $haversine.distance(coord1, coord2)/1000;
                        if (distance < $ctrl.filtroDistancia) {
                            $ctrl.cercanos.push(i+1);
                        }
                        console.log($ctrl.users[i].name + ": " + distance + " kms");
                    };
                    console.log($ctrl.cercanos);
                    $rootScope.$apply();

                },

                // El usuario no autorizó la petición de posición.
                function() {
                    alert("¡El usuario no autorizó!");
                }
            );
        }
        // En caso de no estar soportada.
        else {
            alert("El navegador no soporta geolocalización");
        }
    };

    this.isSelected = function(producto) {
        return (producto.id == selectedId);
    };

}