/**
 * Created by rajan on 2/9/16.
 */
(function() {
  'use strict';
  angular.module('pasapi')
    .controller('FriendsListCrtl',friendsListCrtl);

  function friendsListCrtl ($scope, $http, $state) {
      $http.get('appComponents/data/data.json').success(function(data) {
        $scope.friends = data.friends;
        $scope.whichartist = $state.params.aId;
        $scope.data = { showDelete: false, showReorder: false };

        $scope.onItemDelete = function(item) {
          $scope.friends.splice($scope.friends.indexOf(item), 1);
        };

        $scope.doRefresh =function() {
          $http.get('appComponents/data/data.json').success(function(data) {
            $scope.friends = data.friends;
            $scope.$broadcast('scroll.refreshComplete');
          });
        };

        $scope.toggleStar = function(item) {
          item.star = !item.star;
        };

        $scope.moveItem = function(item, fromIndex, toIndex) {
          $scope.friends.splice(fromIndex, 1);
          $scope.friends.splice(toIndex, 0, item);
        };
      });
    }

})();
