
(function(){
  'use strict';
  angular.module('pasapi', ['ionic','ngMessages'])
    .config(configBlock)
    .run(runBlock);

  function configBlock($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcomeTour', {
        url: '/welcomeTour',
        templateUrl: 'appComponents/welcomeTour/welcomeTour.html',
        controller: 'WelcomeTourCtrl'
      })
      .state('guideTour', {
        url: '/guideTour',
        templateUrl: 'appComponents/guideTour/guideTour.html',
        controller: 'GuideTourCtrl'
      })

      .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'appComponents/homePage/tabs.html'
      })

      .state('tabs.friendsList', {
        url: '/friends',
        views: {
          'home-tab' : {
            templateUrl: 'appComponents/homePage/friendsList/friendsList.html',
            controller: 'FriendsListCrtl'
          }
        }
      })

      .state('tabs.friendDetail', {
        url: '/friend/:aId',
        views: {
          'home-tab' : {
            templateUrl: 'appComponents/homePage/friendsList/friendDetail.html',
            controller: 'FriendsListCrtl'
          }
        }
      })

      .state('tabs.addFriend', {
        url: '/addFriend',
        views: {
          'list-tab' : {
            templateUrl: 'appComponents/homePage/addFriend/addFriend.html',
            controller: 'AddFriendCrtl'
          }
        }
      })

      .state('tabs.calender', {
        url: '/calendar',
        views: {
          'calendar-tab' : {
            templateUrl: 'appComponents/homePage/friendsCalendar/calender.html',
            controller: 'CalendarController'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/friends');
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
    if (firstVisit !=='pasapi' ) {
      $location.url('/welcomeTour');
    }

  }})();

