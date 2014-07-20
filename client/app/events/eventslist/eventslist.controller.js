'use strict';

angular.module('curiouslyApp')
  .controller('EventsListCtrl', function ($scope, $http, Auth, User, Event) {
    $scope.isLoggedIn = Auth.isLoggedIn;

    Event.list(function(loadedEvents) {
      $scope.events = loadedEvents
    });

  });
