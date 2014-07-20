'use strict';

var express = require('express');
var controller = require('./event.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:code', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.post('/:id/questions', controller.addQuestion);
router.get('/:id/questions', controller.getQuestions);
router.post('/:qid/questions/:id/vote', controller.vote);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;