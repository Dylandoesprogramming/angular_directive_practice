app.controller('mainCtrl', function($scope, mainSrvc) {
    $scope.user1 = {
        name: 'Dylan',
        age: 21,
    }
    $scope.user2 = {
        name: 'Steven',
        age: 25
    }

    $scope.sayName = function(message) {
        alert('Hello, ' + message);
    }
});