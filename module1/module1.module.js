(function() {
  var routes;

  angular.module('myApp.module1', []);

  routes = function($stateProvider) {
    $stateProvider.state('module1', {
      url: '/module1',
      templateUrl: 'module1/module1.html'
    });
  };

  routes.$inject = ['$stateProvider'];

  angular.module('myApp.module1').config(routes);

}).call(this);
