
angular.module("whatapop").component("root", {
    $routeConfig: [{
        name:"Products",
        path:"/products/...",
        component:"products",
        useAsDefault: true}
    ],
    templateUrl: "views/root.html"
});