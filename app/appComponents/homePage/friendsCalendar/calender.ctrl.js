/**
 * Created by rajan on 2/10/16.
 */


(function() {
  'use strict';
  angular.module('pasapi')
    .controller('CalendarController',calenderController);

  function calenderController ($scope, $http) {
    $http.get('appComponents/data/data.json').success(function(data) {
      $scope.calendar = data.calendar;

      $scope.onItemDelete = function(dayIndex, item) {
        $scope.calendar[dayIndex].schedule.splice($scope.calendar[dayIndex].schedule.indexOf(item), 1);
      };

      $scope.doRefresh =function() {
        $http.get('appComponents/data/data.json').success(function(data) {
          $scope.calendar = data.calendar;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      };

    });
  }

})();

