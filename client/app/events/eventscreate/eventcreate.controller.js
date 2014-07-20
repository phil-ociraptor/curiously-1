'use strict';

angular.module('curiouslyApp')
  .controller('EventsCreateCtrl', function ($scope, $http, Auth, User, Event, $location) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.prefillCode = function() {
      $scope.eventCode = $scope.eventName.toLowerCase().replace(/ /g, '').replace(/[^a-z0-9]/g, '');
    }
    $scope.create = function(form) {
      $scope.submitted = true;
      Event.create({name: $scope.eventName, code: $scope.eventCode}, function(createdEvent) {
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
