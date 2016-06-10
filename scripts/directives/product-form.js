
angular.module("whatapop")
        .directive("productForm", function () {

            return {
                restrict:"EA",
                templateUrl:"views/product-form.html",
                scope: {
                    pressButton: "&"
                },
                link: ["scope",function (scope) {
                    
                    // Manejador del boton
                    scope.notifyText = function () {
                        // Notificamos cuando se pulsa el boton de guardar el producto.  RESPETAR EL NOMBRE DEL PARAMETRO!! : texto
                        scope.pressButton({ texto: scope.texto });
                    };
                }]
            }

        });