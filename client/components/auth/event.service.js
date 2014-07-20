'use strict';

angular.module('curiouslyApp')
  .factory('Event', function ($resource) {
    return $resource('/api/event/:code/:controller', {
      code: '@code',
      id: '@_id'
    },
    {
      create: {
        method: 'POST',
        url: '/api/event'
      },
      get: {
        method: 'GET'
      },
      list: {
        method: 'GET',
        url: '/api/event',
        isArray: true
      },
      addQuestion: {
        method: 'POST',
        url: '/api/event/:id/questions'
      },
      getQuestions: {
        method: 'GET',
        url: '/api/event/:id/questions',
        isArray: true
      }
	  });
  });
