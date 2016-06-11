
angular
    .module("whatapop")
    .component("products", {
        template: '<ng-outlet></ng-outlet>',
        $routeConfig: [{
            path: "/",
            name: "ProductsList",
            component: "productList",
            useAsDefault: true
        } , {
            path: "/:id",
            name: "ProductDetails",
            component: "productDetails"
        }]
});
