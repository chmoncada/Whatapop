var NewUserComponent = function (ProductService, $rootScope, $http, Properties) {

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

        var newUserPromise;

        // Si la imagen viene dada.
        if (imageNewUser) {

            // Montamos un 'FormData' con la imagen.
            var datos = new FormData();
            datos.append("img", imageNewUser);

            // Configuramos el 'Content-Type' de la petición.
            // Tenemos que indicarlo como 'undefined' para que
            // AngularJS infiera el tipo de la petición.
            var configuracion = {
                "headers": {
                    "Content-Type": undefined
                }
            };

            // Subimos la imagen al servidor.
            newUserPromise = $http
                .post(
                    Properties.urlServidor + Properties.endpointImagenes,
                    datos,
                    configuracion
                )
                .then(function(respuesta) {

                    // En la propiedad 'path' me viene dada
                    // la ruta relativa de la imagen subida.
                    var ruta = respuesta.data.path;

                    // Establecemos la ruta de la imagen en
                    // el objeto receta antes de guardarla.
                    self.newUser.avatar = ruta;

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

                        console.log(self.newUser);

                        ProductService
                            .saveUser(self.newUser)
                            .then(function (respuesta) {
                                console.log("NUEVO USUARIO GRABADO");
                                // console.log(self.$router);
                                //
                                // self.$router.navigate(["/Products"]);
                            });
                    });


                });
        }

        // En caso de no haber indicado una imagen.
        else {
            newUserPromise = $http.post(Propiedades.urlServidor + Propiedades.endpointRecetas, receta);
        }
        return newUserPromise;
    };

    // Guardamos el documento de imagen indicado para grabarlo
    self.seleccionarImagen = function(image) {
        imageNewUser = image;
    };

    // Eliminamos el documento de imagen que
    // hubiese seleccionado previamente.
    self.deseleccionarImagen = function() {
        imageNewUser = undefined;
    };

};

NewUserComponent.$inject = ["ProductService", "$rootScope", "$http", "Properties"];

angular
    .module("whatapop")
    .component("newUser", {
        bindings: { $router: "<" },
        templateUrl:"views/new-user.html",
        controller: NewUserComponent
    });