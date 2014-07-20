'use strict';

angular.module('curiouslyApp')
  .controller('EventsDetailCtrl', function ($scope, $http, Auth, User, $stateParams, Event, $location) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    Event.get({code: $stateParams.code}, function(loadedEvent) {
      $scope.eventCode = loadedEvent.code;
      $scope.eventName = loadedEvent.name;
      $scope.eventActive = loadedEvent.active;
    }, function(err) {
      $location.path('/events');
    });

  });
