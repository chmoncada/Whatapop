angular
    .module("whatapop")
    .directive('itemCard', function () {
        
        // Devolver la directiva 
        return {
            restrict: "EA",
            scope: {
                title: '@itemTitle',
                price: '@itemPrice',
                src: '@itemSrc'
            },
            controller: function ($scope, $element, $attrs, $location) {
                $scope.addToCart = function (t, p) {
                    var mainScope = angular.element("#main").scope();
                    mainScope.buyItem(t, p);
                    return false;
                };
            },
            replace: true,
            templateUrl: "views/mostrar-producto.html"
        };
});