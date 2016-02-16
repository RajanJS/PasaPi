/**
 * Created by rajan on 2/9/16.
 */
(function() {
  'use strict';
 angular.module('pasapi')
    .controller('WelcomeTourCtrl',welcomeTourCtrl);

    function welcomeTourCtrl ($scope, $location, $ionicPopup) {

    $scope.login = function () {
      $ionicPopup.prompt({
        title: 'Enter this code >> \'pasapi\' <<',
        inputPlaceholder: 'Enter login code give between >>??<< ',
        okText: 'Login'
      }).then(function (code) {
        // Login with code
        localStorage.setItem('firstVisit', code);
        if (code === 'pasapi' || code ==='Pasapi'){
          $location.url('/tab/friends');
        }else {
          $ionicPopup.alert({
            title: 'Invalid Code !',
            template: 'Please enter \'pasapi\' for code. !'
          });
          $location.url('/welcomeTour');
         }
      });
    };
  }
})();
