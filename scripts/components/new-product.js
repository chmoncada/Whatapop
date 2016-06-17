angular
    .module("whatapop")
    .component("newProduct", {
        bindings: { $router: "<" },
        templateUrl:"views/new-product.html",
        controller: function (ProductService) {

            var $ctrl = this;

            this.$routerOnActivate = function (next) {

                //Cargamos las categorias y usuarios existentes para el formulario
                ProductService.getCategories().then(function (respuesta) {
                    $ctrl.categories = respuesta.data;
                    ProductService.getUsers().then(function (respuesta) {
                        $ctrl.users = respuesta.data;
                        ProductService.getProducts().then(function (respuesta) {
                            $ctrl.products = respuesta.data;
                        });
                    });
                });
            };

            // Creamos Producto standard
            $ctrl.newProduct = {
                id: "",
                name:"",
                description:"",
                category: {
                    id:"",
                    name:""
                },
                seller: {
                    id: "",
                    nick: "",
                    avatar: ""
                },
                published_date:"",
                state:"",
                price:"",
                photos: [
                    ""
                ]
            }

            //Guardamos el productos
            $ctrl.saveNewProduct = function () {

                // Llenamos los campos faltantes del objeto ya que se cargo la data minima
                $ctrl.newProduct.published_date = Date.now();
                $ctrl.newProduct.state = "selling";
                // Llenamos el campo faltante de la categoria
                for ( var i=0; i<$ctrl.categories.length; i++) {
                    if($ctrl.newProduct.category.name === $ctrl.categories[i].name) {
                        $ctrl.newProduct.category.id = $ctrl.categories[i].id;
                    };
                }

                // Llenamos el campo faltante del vendedor
                for ( var i=0; i<$ctrl.users.length; i++) {
                    if($ctrl.newProduct.seller.nick === $ctrl.users[i].nick) {
                        $ctrl.newProduct.seller.id = $ctrl.users[i].id;
                        $ctrl.newProduct.seller.avatar = $ctrl.users[i].avatar;
                    };
                }

                //Llenamos el id del producto

                var maximo = 0;
                //Buscamos el mayor id que existe en la lista de usuarios
                for (var i=0; i<$ctrl.products.length; i++){
                    if ( $ctrl.products[i].id>maximo) {
                        maximo= $ctrl.products[i].id;
                    }
                };

                $ctrl.newProduct.id = maximo +1 ;

                console.log("CREANDO NUEVO PRODUCTO");
                console.log($ctrl.newProduct);

                // Ya listo procedemos a grabar
                ProductService.saveProduct($ctrl.newProduct).then(function (respuesta) {
                   console.log("Producto grabado");

                });
            };
        }
    });