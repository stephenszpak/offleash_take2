﻿app.controller("loginController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    $scope.email = "a@a.com";
    $scope.password = "!heY123";
    $scope.login = function () {
        $http({
            method: 'POST',
            url: "/Token",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: { grant_type: "password", userName: $scope.email, password: $scope.password }
        })
            .then(function (result) {
                sessionStorage.setItem('token', result.data.access_token);
                $http.defaults.headers.common['Authorization'] = `bearer ${result.data.access_token}`;
                $location.path("/home");
            });
    }
}
]);