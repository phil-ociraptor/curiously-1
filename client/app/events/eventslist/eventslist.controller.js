'use strict';

angular.module('curiouslyApp')
  .controller('EventsListCtrl', function ($scope, $http, Auth, User) {
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.events = [{
      code: 'ah14',
      name: 'AngelHack',
      active: true
    },
    {
      code: 'angularh14',
      name: 'AngelHack',
      active: false
    }];

  });
