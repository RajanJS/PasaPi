/**
 * Created by rajan on 2/9/16.
 */

(function() {
  'use strict';
  angular.module('pasapi')
    .controller('AddFriendCrtl',addFriendCrtl);

  function addFriendCrtl ($scope, $ionicPopup) {

    $scope.authorization = {
      username:'',
      password : '',
      gender : '',
      phoneNo: '',
      email:'',
      address:'',
      nationality:'',
      contactMode:''
    };

    $scope.add = function(form) {
      if(form.$valid) {
        $ionicPopup.show({
          subTitle: 'Friend Added !',
          buttons: [
            { text: '<b>OK</b>',
              type: 'button-balanced'
            }
          ]
        });
      }
    };
  }

})();
