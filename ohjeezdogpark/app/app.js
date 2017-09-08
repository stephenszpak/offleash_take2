var app = angular.module("OffLeash", ["ngRoute"]);


//routes
app.config(["$routeProvider","$httpProvider", function ($routeProvider, $httpProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "app/partials/login.html",
            controller: "loginController"
        })
        .when("/signup",
        {
            templateUrl: "/app/partials/signup.html",
            controller: "signupController"
        })
        .when("/home",
        {
            templateUrl: "/app/partials/home.html",
            controller: "homeController"
        })
        .otherwise("/");

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

//token storage
app.run(["$http", function ($http) {

    var token = sessionStorage.getItem("token");

    if (token)

        $http.defaults.headers.common["Authorization"] = `bearer ${token}`;
}
]);