/**
 * Created by rajan on 2/9/16.
 */

'use strict';
angular.module('pasapi').controller('welcomeTourCtrl', function ($scope, $location, $ionicPopup) {

  $scope.login = function () {
    $ionicPopup.prompt({
      title: 'Login',
      inputPlaceholder: 'Enter login code',
      okText: 'Login'
    }).then(function () {
      // Login with code
      localStorage.setItem('firstVisit', '1');
      $location.url('/');
    });
  };

});
