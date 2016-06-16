
angular.module("whatapop")
    .directive("userForm", function () {

        return {
            restrict:"EA",
            templateUrl:"views/user-form.html",
            scope: {
                pressEnter: "&"
            },
            link: function (scope) {

                // Manejador del boton
                scope.notifyText = function () {
                    // Notificamos cuando se pulsa el boton de guardar el producto.  RESPETAR EL NOMBRE DEL PARAMETRO!! : texto
                    scope.pressEnter({ texto: scope.texto });
                };
            }
        }

    });