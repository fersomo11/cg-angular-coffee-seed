angular.module 'myApp.module1', []

routes = ($routeProvider) ->
  $routeProvider
    .when '/module1', {
      templateUrl: 'module1/module1.html'
    }
  return

# Injection of dependecies
routes.$inject = ['$routeProvider']

angular
  .module 'myApp.module1'
  .config routes