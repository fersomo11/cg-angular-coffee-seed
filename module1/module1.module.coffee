angular.module 'myApp.module1', []

routes = ($stateProvider) ->
  $stateProvider
    .state 'module1', {
      url: '/module1',
      templateUrl:'module1/module1.html'
    }
  return

# Injection of dependecies
routes.$inject = ['$stateProvider']

angular
  .module 'myApp.module1'
  .config routes