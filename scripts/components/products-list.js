// Definimos el Controlador del componente
var ProductListComponent = function(ProductService, $haversine, $filter, $rootScope) {

    //var selectedId = null;
    var $ctrl = this;

    //$ctrl.filtroDistancia = 99999; // hacemos que se carguen los productos al inicio

    // recuperamos los arrays para las vistas
    this.$routerOnActivate = function (next) {

        ProductService.getUsers().then(function (respuesta) {
            $ctrl.users = respuesta.data;
            $ctrl.cercanos=[];
            //Inicializamos el array de cercanos para que cargue la pagina inicial
            for (var i=0; i< $ctrl.users.length; i++){
                $ctrl.cercanos.push($ctrl.users[i].id);
            };
            //console.log($ctrl.cercanos);
            //$ctrl.cercanos=[1,2,3,4,5,6];

            ProductService.getCategories().then(function (respuesta) {
                $ctrl.categories = respuesta.data;
                //console.log($ctrl.categories);
                ProductService.getProducts().then(function (respuesta) {
                    $ctrl.productos = respuesta.data;
                    //selectedId = next.params.id;
                });
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
                        //console.log($ctrl.users[i].name + ": " + distance + " kms");
                    };
                    //console.log($ctrl.cercanos);
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
};

// Inyectamos las dependencias
ProductListComponent.$inject = ["ProductService", "$haversine", "$filter", "$rootScope"];

//Defininmos el componente
angular
    .module("whatapop")
    .component("productList", {
        templateUrl:"views/products-list.html",
        bindings: {
          cercanos: '<'
        },
        controller: ProductListComponent
    });

