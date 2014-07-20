'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uniqueValidator = require('mongoose-unique-validator');

var QuestionSchema = new Schema({
    question: { type: String, required: true, trim: true },
    votes: { type: Number, default: 0 }
});

var EventSchema = new Schema({
  name: { type: String, required: true, trim: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  code: { type: String, required: true, index: true, unique: true, validate: function(val) { return /^[a-z0-9\-]{4,15}$/g.test(val); } },
  active: { type: Boolean, default: true },
  questions: [QuestionSchema]
});

EventSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique' });

module.exports = mongoose.model('Event', EventSchema);