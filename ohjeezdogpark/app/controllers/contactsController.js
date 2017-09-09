app.controller("contactsController", ["$scope", "$http", "$location", function ($scope, $http, $location) {


    $scope.contactList = {};
    $scope.contact = {};
    $scope.editing = false;


    //Add Contact
    $scope.addContact = function () {
        $http.post('api/contact', $scope.contact)
        .then(function () {
            $location.path('/contacts');
            $scope.contact = {};
        });
    }

    //Get Contacts
    var getContacts = function () {
        $http.get('api/contact')
        .then(function (result) {
            $scope.contactList = result.data;
        })
    }

    getContacts();

    //Delete Contact




}]);