angular.module("whatapop").filter("ProductSummary", function () {
   return function (texto) {
       // Para procesar el texto solo si tiene el caracter[
       if( texto.indexOf("[") !== -1){
           var separador = texto.indexOf("[");
       } else {
           separador = texto.length - 1
       }

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

