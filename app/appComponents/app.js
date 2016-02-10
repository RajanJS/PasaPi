
(function(){
  'use strict';
  angular.module('pasapi', ['ionic'])
    .config(configBlock)
    .run(runBlock)
    //.controller('NavbarCtrl', function ($scope, $ionicSideMenuDelegate) {
    //
    //  $scope.openMenu = function () {
    //    $ionicSideMenuDelegate.toggleLeft();
    //  };
    //})

  //calender controlller
    .controller('CalendarController', ['$scope', '$http',
      function($scope, $http) {
        $http.get('js/data.json').success(function(data) {
          $scope.calendar = data.calendar;
          $scope.onItemDelete = function(dayIndex, item) {
            $scope.calendar[dayIndex].schedule.splice($scope.calendar[dayIndex].schedule.indexOf(item), 1);
          };

          $scope.doRefresh =function() {
            $http.get('js/data.json').success(function(data) {
              $scope.calendar = data.calendar;
              $scope.$broadcast('scroll.refreshComplete');
            });
          };

          $scope.toggleStar = function(item) {
            item.star = !item.star;
          };

        });
      }])

  //List controller
    .controller('ListController', ['$scope', '$http', '$state',
      function($scope, $http, $state) {
        $http.get('appComponents/data/data.json').success(function(data) {
          $scope.artists = data.artists;
          $scope.whichartist = $state.params.aId;
          $scope.data = { showDelete: false, showReorder: false };

          $scope.onItemDelete = function(item) {
            $scope.artists.splice($scope.artists.indexOf(item), 1);
          };

          $scope.doRefresh =function() {
            $http.get('appComponents/data/data.json').success(function(data) {
              $scope.artists = data;
              $scope.$broadcast('scroll.refreshComplete');
            });
          };

          $scope.toggleStar = function(item) {
            item.star = !item.star;
          };

          $scope.moveItem = function(item, fromIndex, toIndex) {
            $scope.artists.splice(fromIndex, 1);
            $scope.artists.splice(toIndex, 0, item);
          };
        });
      }]);


  function configBlock($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcomeTour', {
        url: '/welcomeTour',
        templateUrl: 'appComponents/welcomeTour/welcomeTour.html',
        controller: 'welcomeTourCtrl'
      })

      .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'appComponents/homePage/tabs.html'
      })

      .state('tabs.home', {
        url: '/home',
        views: {
          'home-tab' : {
            templateUrl: 'appComponents/homePage/home.html'
          }
        }
      })

      .state('tabs.list', {
        url: '/list',
        views: {
          'list-tab' : {
            templateUrl: 'appComponents/homePage/list.html',
            controller: 'ListController'
          }
        }
      })

      .state('tabs.detail', {
        url: '/list/:aId',
        views: {
          'list-tab' : {
            templateUrl: 'appComponents/homePage/detail.html',
            controller: 'ListController'
          }
        }
      })

      .state('tabs.calendar', {
        url: '/calendar',
        views: {
          'calendar-tab' : {
            templateUrl: 'appComponents/homePage/calendar.html',
            controller: 'CalendarController'
          }
        }
      });


    $urlRouterProvider.otherwise('/tab/home');
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

