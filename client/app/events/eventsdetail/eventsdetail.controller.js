'use strict';

angular.module('curiouslyApp')
  .controller('EventsDetailCtrl', function ($scope, $http, Auth, User, $stateParams, Event, $location, socket) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    Event.get({code: $stateParams.code}, function(loadedEvent) {
      $scope.eventId = loadedEvent._id;
      $scope.eventCode = loadedEvent.code;
      $scope.eventName = loadedEvent.name;
      $scope.eventOwner = loadedEvent.owner;
      $scope.eventActive = loadedEvent.active;

      Event.getQuestions({id: loadedEvent._id}, function(questions) {
        $scope.questions = questions;
        socket.syncUpdates(loadedEvent._id + '.questions', $scope.questions);    
        $scope.$on('$destroy', function () {
          socket.unsyncUpdates(loadedEvent._id + '.questions');
        });
      }, function(err) {
        
      });

    }, function(err) {
      $location.path('/events');
    });

    $scope.ask = function(form) {
      $scope.submitted = true;
      $scope.success = false;
      console.log($scope.question);
      Event.addQuestion({question: $scope.question, _id: $scope.eventId}, function(createdEvent) {
        $scope.submitted = false;
        $scope.success = true;
        $scope.question = '';
      }, function(err) {
       
      });
    };

  });
