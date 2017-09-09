var app = angular.module("OffLeash", ["ngRoute"]);

var isAuth = function () {
    return sessionStorage.getItem("token") ? true : false;
};

app.run(($rootScope, $location, $http) => {

    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
        var logged = isAuth();
        var appTo;
        if (currRoute.originalPath) {
            appTo = currRoute.originalPath.indexOf('/login') !== -1 || currRoute.originalPath.indexOf('/signup') !== -1;
        }
        if (!appTo && !logged) {
            event.preventDefault();
            $location.path('/login');
        }
    });

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;
});

app.config(["$routeProvider","$httpProvider", function ($routeProvider, $httpProvider) {
    $routeProvider
        .when("/login",
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
            controller: "homeController",
            resolve: { isAuth }
        })
        .when("/contacts",
        {
            templateUrl: "/app/partials/contacts.html",
            controller: "contactsController",
            resolve: { isAuth }
        })
        .otherwise("/login");

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
