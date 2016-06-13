angular.module("whatapop").filter("ProductSummary", function () {
   return function (texto) {
       var separador = texto.indexOf("[");
       var titleSummary = texto.substring(0,separador);
       return titleSummary;
   };
});

angular.module("whatapop").filter("ProductType", function () {
    return function (texto) {
        var inicio = texto.indexOf("[");
        var fin = texto.indexOf("]");
        var type = texto.substring(inicio+1,fin);
        return type;
    };
});