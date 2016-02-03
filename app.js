(function() {
  var config, runSafeApply;

  angular.module('myApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'myApp.module1', 'moduleabc']);

  config = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  };

  runSafeApply = function($rootScope) {
    $rootScope.safeApply = function(fn) {
      var phase;
      phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if ((fn != null) && (typeof fn === 'function')) {
          console.log('Error');
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  };

  config.$inject = ['$urlRouterProvider'];

  runSafeApply.$inject = ['$rootScope'];

  angular.module('myApp').config(config).run(runSafeApply);

}).call(this);
