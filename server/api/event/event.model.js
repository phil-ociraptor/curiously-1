'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  code: String,
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);