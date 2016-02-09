
(function(){
  'use strict';
  angular.module('pasapi', ['ionic'])
    .config(configBlock)
    .run(runBlock)
    .controller('NavbarCtrl', function ($scope, $ionicSideMenuDelegate) {

      $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };
    });

  function configBlock($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcomeTour', {
        url: '/welcomeTour',
        templateUrl: 'appComponents/welcomeTour/welcomeTour.html',
        controller: 'welcomeTourCtrl'
      })
      .state('home', {
        url: '/',
        templateUrl: 'appComponents/homePage/home.html'
      });

    $urlRouterProvider.otherwise('/');
  }

  function runBlock($ionicPlatform,$location) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    var firstVisit = localStorage.getItem('firstVisit');
    if (!firstVisit) {
      $location.url('/welcomeTour');
    }

  }})();

