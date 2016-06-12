
angular.module("whatapop").component("root", {
    $routeConfig: [{
        name:"Products",
        path:"/products/...",
        component:"products",
        useAsDefault: true},
        {
            name: "NewProduct",
            path: "/new-product",
            component: "newProduct"
        }
    ],
    templateUrl: "views/root.html"
});