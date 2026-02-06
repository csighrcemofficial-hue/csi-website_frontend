angular.module('csiApp', [])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);