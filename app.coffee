angular.module 'myApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate', 'myApp.module1']

# Routing
config = ($routeProvider) ->
  $routeProvider
    .otherwise {
      redirectTo: '/home'
    }
  return
  
# SafeApply logic
runSafeApply = ($rootScope) ->
  $rootScope.safeApply = (fn) ->
    phase = $rootScope.$$phase
    if phase is '$apply' or phase is '$digest'
      if fn? and (typeof(fn) is 'function')
        console.log 'Error'
        fn()
    else
      @$apply fn
    return
  return
  
# Injection of dependencies
config.$inject = ['$routeProvider']
runSafeApply.$inject = ['$rootScope']

angular
  .module 'myApp'
  .config config
  .run runSafeApply