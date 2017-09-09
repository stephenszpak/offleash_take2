app.controller("navController", ["$scope", "$location", function ($scope, $location) {

    $scope.checkAuth = function () {
        return sessionStorage.getItem("token") ? true : false;
    }

    $scope.logout = function () {
        sessionStorage.clear();
        $location.path("/login");
    }
}]);