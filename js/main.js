var app = angular.module('app', ['googleplus']);

app.controller('CalendarController', ['$scope', function($scope) {
	$scope.today = 'Monday';
}]);


app.config(['GooglePlusProvider', function(GooglePlusProvider) {
     GooglePlusProvider.init({
       clientId: '333246592816-u8v9b8kfoujvspfhovll4pe25tfi9n5u.apps.googleusercontent.com',
       apiKey: 'AIzaSyAwum42gzOc-XRQc1vEtmSxWHi7TN5pPTI'
     });
}]);

app.controller('AuthCtrl', ['$scope', 'GooglePlus', function ($scope, GooglePlus) {
    $scope.login = function () {
      GooglePlus.login().then(function (authResult) {
          console.log(authResult);

          GooglePlus.getUser().then(function (user) {
              console.log(user);
          });
      }, function (err) {
          console.log(err);
      });
    };
}])