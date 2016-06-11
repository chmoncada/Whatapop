
angular.module("whatapop")
        .directive("productForm", function () {

            return {
                restrict:"EA",
                templateUrl:"views/product-form.html",
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