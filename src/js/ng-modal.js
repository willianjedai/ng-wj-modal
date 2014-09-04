;(function () {
  'use strict';
  angular.module('ngModal', [])
  .directive('modalWindow', function () {
    return {
      restrict: 'A',
      link: function () {
        console.log('o2i');
      }
    };
  })
  .provider('$modal', function () {
    var $modalProvider = {
      $get: function ( $injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack ) {
        var $modal = {};

        
        function getTemplatePromise(options) {
          return options.template ? $q.when(options.template) :
            $http.get(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl,
              {cache: $templateCache}).then(function (result) {
                return result.data;
            });
        }
      }
    };

    return $modalProvider;
  });
})();