'use strict';

angular.module('curiouslyApp')
  .factory('Event', function ($resource) {
    return $resource('/api/event/:code/:controller', {
      id: '@code'
    },
    {
      create: {
        method: 'POST',
        url: '/api/event'
      },
      get: {
        method: 'GET'
      }
	  });
  });
