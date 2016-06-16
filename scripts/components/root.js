
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
        },
        {
            name: "NewUser",
            path: "/new-user",
            component: "newUser"
        }
    ],
    templateUrl: "views/root.html"
});