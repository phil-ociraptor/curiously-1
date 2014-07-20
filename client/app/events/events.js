'use strict';

angular.module('curiouslyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventslist', {
        url: '/events',
        templateUrl: 'app/events/eventslist/eventslist.html',
        controller: 'EventsListCtrl'
      })
      .state('eventscreate', {
        url: '/events/create',
        templateUrl: 'app/events/eventscreate/eventscreate.html',
        controller: 'EventsCreateCtrl'
      })
      .state('eventsdetail', {
        url: '/events/:code',
        templateUrl: 'app/events/eventsdetail/eventsdetail.html',
        controller: 'EventsDetailCtrl'
      });
  });