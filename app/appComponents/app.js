'use strict';

angular.module('pasapi', ['ionic'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcomeTour', {
        url: '/welcomeTour',
        templateUrl: 'appComponents/welcomeTour/welcomeTour.html',
        controller: 'welcomeTourCtrl'
      });
      
    $urlRouterProvider.otherwise('/');
  })

  .run(function($ionicPlatform,$location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

    var firstVisit = localStorage.getItem('firstVisit');
      if (!firstVisit) {
          $location.url('/welcomeTour');
      }
  })
  ;
