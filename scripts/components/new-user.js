angular
    .module("whatapop")
    .component("newUser", {
        bindings: { $router: "<" },
        templateUrl:"views/new-user.html",
        controller: function (ProductService) {

            var self = this;

            //Guardamos los productos
            self.saveUser = function (texto) {

                var usuario = {
                    name: texto
                };
                console.log(usuario);

                ProductService
                    .saveUser(usuario)
                    .then(function (respuesta) {
                        console.log(self.$router);

                        self.$router.navigate(["/Products"]);
                    });
            };
        }
    });