
angular
    .module("whatapop")
    .value("Properties", {
        urlServidor: "http://localhost:8000",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users",
        endpointImagenes: "/upload"
    });