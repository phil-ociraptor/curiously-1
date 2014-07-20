'use strict';

angular.module('curiouslyApp')
  .controller('EventsCtrl', function ($scope, $http, Auth, User) {
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.events = [{
      code: 'ah14',
      name: 'AngelHack',
      time: 'July 20'
    },
    {
      code: 'angularh14',
      name: 'AngelHack',
      time: 'July 20'
    }];

  });
