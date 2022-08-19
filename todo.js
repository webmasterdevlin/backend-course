const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: mongoose.Schema.Types.String,
  completed: mongoose.Schema.Types.Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
