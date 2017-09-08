app.controller("signupController", ["$scope", "$location", "$http", function ($scope, $location, $http) {

    $scope.newUser = {};
    $scope.signup = function () {
        $http({
            method: 'POST',
            url: "api/Account/Register",
            data: {
                "Email": $scope.newUser.email,
                "Password": $scope.newUser.password,
                "ConfirmPassword": $scope.newUser.passwordConfirm
            }
        })
            .then(function (result) {
                $location.path("/login");
            });
    }
    
}]);