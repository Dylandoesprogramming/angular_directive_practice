app.directive('testDir', function() {
    return {
        restrict: 'EA',
        templateUrl: './views/testTmpl.html',
        scope: {
            info: '=info',
            otherParam: '@',
            greet: '&',
        },
        link: function(scope, elems, attrs) {
            scope.info.name = 'Frank'
            console.log(attrs)
        },

        controller: function($scope, mainSrvc) {

        }
    }
})