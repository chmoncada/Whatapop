

// Setter del modulo
angular.module("whatapop",["ngComponentRouter"]);

angular.module("whatapop").config(function ($locationProvider) {
   $locationProvider.html5Mode(true); 
});

//pasamos el nombre del componente raiz
angular.module("whatapop").value("$routerRootComponent", "root");