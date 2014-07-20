'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uniqueValidator = require('mongoose-unique-validator');

var QuestionSchema = new Schema({
  question: { type: String, required: true, trim: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Question', QuestionSchema);