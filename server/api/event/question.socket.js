/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var question = require('./question.model');

exports.register = function(socket) {
  question.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  question.schema.post('update', function (doc) {
    onSave(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit(doc.event + '.questions:save', doc);
}