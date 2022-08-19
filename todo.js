const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: mongoose.Schema.Types.String,
  completed: mongoose.Schema.Types.Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
