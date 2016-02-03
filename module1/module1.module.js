(function() {
  var routes;

  angular.module('myApp.module1', []);

  routes = function($routeProvider) {
    $routeProvider.when('/module1', {
      templateUrl: 'module1/module1.html'
    });
  };

  routes.$inject = ['$routeProvider'];

  angular.module('myApp.module1').config(routes);

}).call(this);
