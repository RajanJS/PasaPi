/**
 * Created by rajan on 2/9/16.
 */
(function() {
  'use strict';
  angular.module('pasapi')
    .controller('GuideTourCtrl',guideTourCtrl);

  function guideTourCtrl ($scope, $location, $ionicPopup) {

    $scope.goBack = function () {
        $location.url('/guideTour');
    };
  }
})();
