'use strict';

angular.module('curiouslyApp')
  .controller('EventsDetailCtrl', function ($scope, $http, Auth, User, $stateParams, Event, $location) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    Event.get({code: $stateParams.code}, function(loadedEvent) {
      $scope.eventId = loadedEvent._id;
      $scope.eventCode = loadedEvent.code;
      $scope.eventName = loadedEvent.name;
      $scope.eventOwner = loadedEvent.owner;
      $scope.eventActive = loadedEvent.active;
    }, function(err) {
      $location.path('/events');
    });

    $scope.ask = function(form) {
      $scope.submitted = true;
      Event.addQuestion({question: $scope.question, _id: $scope.eventId}, function(createdEvent) {
        $location.path('/events/' + createdEvent.code);
      }, function(err) {
        if(err.data.errors.code && err.data.errors.code.type != 'required') {
          $scope.errorMessage = 'Please try a different code.';
        } else {
          $scope.errorMessage = 'Please make sure all fields are filled in correctly.';
        }
      });
    };

  });
