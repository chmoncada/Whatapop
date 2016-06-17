angular
    .module("whatapop")
    .component("newUser", {
        bindings: { $router: "<" },
        templateUrl:"views/new-user.html",
        controller: function (ProductService, $rootScope) {

            var self = this;

            //Creamos instancia de nuevo usuario
            self.newUser = {
                id: "",
                name: "",
                nick:"",
                avatar:"",
                latitude:"",
                longitude:"",
                email:""
            };

            // encontramos la posicion del nuevo usuario
            self.newUserPosition = function () {
                console.log("BUSCANDO...");
                if (navigator.geolocation) {
                    // Solicitamos la posición.
                    navigator.geolocation.getCurrentPosition(
                        // En caso de obtener la posición.
                        function(datos) {
                            self.newUser.latitude = datos.coords.latitude;
                            self.newUser.longitude = datos.coords.longitude;
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

            // Guardamos el nuevo usuario
            self.saveNewUser = function () {

                ProductService.getUsers().then(function (respuesta) {
                   self.users= respuesta.data;
                    var maximo = 0;
                    //Buscamos el mayor id que existe en la lista de usuarios
                    for (var i=0; i<self.users.length; i++){
                        if ( self.users[i].id>maximo) {
                            maximo= self.users[i].id;
                        }
                    };

                    self.newUser.id = maximo + 1;

                    ProductService
                        .saveUser(self.newUser)
                        .then(function (respuesta) {
                            console.log("NUEVO USUARIO GRABADO");
                            // console.log(self.$router);
                            //
                            // self.$router.navigate(["/Products"]);
                        });
                });
            };


        }
    });