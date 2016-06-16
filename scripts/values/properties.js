
angular
    .module("whatapop")
    .value("Properties", {
        urlServidor: "http://localhost:8000",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users",
        endpointCategories: "/api/categories",
        endpointImagenes: "/upload"
    });