var app = angular.module("OffLeash", ["ngRoute"]);


//routes
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "app/login.html",
            controller: "loginController"
        })
        .when("/signup",
        {
            templateUrl: "/app/signup.html",
            controller: "signupController"
        })
        .otherwise("/");
}]);

//token storage
app.run(["$http", function ($http) {

    var token = sessionStorage.getItem("token");

    if (token)

        $http.defaults.headers.common["Authorization"] = `bearer ${token}`;
}
]);