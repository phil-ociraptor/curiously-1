/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Event = require('./event.model');
var Question = require('./question.model');

// Get list of things
exports.index = function(req, res) {
  Event.find({owner: req.user._id}, function (err, loadedEvents) {
    if(err) { return handleError(res, err); }
    return res.json(200, loadedEvents);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Event.findOne({code: req.params.code}, function (err, loadedEvent) {
    if(err) { return handleError(res, err); }
    if(!loadedEvent) { return res.send(404); }
    return res.json(loadedEvent);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Event.create({
    name: req.body.name,
    owner: req.user._id,
    code: req.body.code,
  }, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Creates a new question in the DB.
exports.addQuestion = function(req, res) {
  Question.create({
    question: req.body.question,
    event: req.params.id
    //owner: req.user._id,
  }, function(err, question) {
    if(err) { return handleError(res, err); }
    return res.json(201, question);
  });
};

// Gets question from the DB.
exports.getQuestions = function(req, res) {
  Question.find({
    event: req.params.id
    //owner: req.user._id,
  }, function(err, questions) {
    if(err) { return handleError(res, err); }
    return res.json(201, questions);
  });
};

// // Deletes a thing from the DB.
// exports.destroy = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     thing.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

function handleError(res, err) {
  return res.send(500, err);
}