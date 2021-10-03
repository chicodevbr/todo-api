const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  finished: {
    type: Boolean,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Todo = mongoose.model('todos', todoSchema);
