'use strict';

angular.module('curiouslyApp')
  .controller('EventsListCtrl', function ($scope, $http, Auth, User, Event, $location) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    if(Auth.isLoggedIn()) {
      Event.list(function(loadedEvents) {
        $scope.events = loadedEvents
      });
    }

    $scope.go = function(form) {
      $scope.noSuchEvent = false;
      Event.get({code: $scope.eventCode.toLowerCase().replace(/ /g, '').replace(/[^a-z0-9\-]/g, '')}, function(loadedEvent) {
        $location.path('/events/' + loadedEvent.code);
      }, function(err) {
        $scope.noSuchEvent = true;
      });
    }

  });
