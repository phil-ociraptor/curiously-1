'use strict';

angular.module('curiouslyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'app/event/events.html',
        controller: 'EventsCtrl'
      });
  });