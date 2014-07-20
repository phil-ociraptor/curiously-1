'use strict';

angular.module('curiouslyApp')
  .controller('EventsCreateCtrl', function ($scope, $http, Auth, User) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.prefillCode = function() {
      $scope.eventCode = $scope.eventName.toLowerCase().replace(/ /g, '').replace(/[^a-z0-9]/g, '');
    }
  });
