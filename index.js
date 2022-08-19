require("dotenv").config(); // for .env file
const express = require("express");
const mongoose = require("mongoose");
const todoModel = require("./todo");

const server = express();
// parse application/json
server.use(express.json());

// req is the request object
// res is the response object
server.get("/api/todos", async (request, response) => {
  try {
    const todos = await todoModel.find();
    response.send(todos);
  } catch (error) {
    response.status(500).send(error);
  }
});
server.post("/api/todos", async (request, response) => {
  //  req.body is the body of the request
  try {
    const todo = new todoModel(request.body);
    await todo.save();
    response.status(201).send(todo);
  } catch (error) {
    response.status(500).send(error);
  }
});
server.delete("/api/todos/:id", (request, response) => {
  // req.params is the parameters of the request
  response.status(204).send();
});
// url parameters are available in req.params
server.put("/api/todos/:id", (request, response) => {
  response.send({ id: req.params.id, title: "todo updated" });
});
// query params sample in express
// query parameter starts with question mark. api/todos?message=hello in the front end
// query parameter is a key value pair
server.get("/api/greet", (request, response) => {
  response.send({ message: request.query.message });
});

mongoose.connect(
  `mongodb+srv://webmasterdevlin:${process.env.MONGODB_CONNECTION_STRING}@soprasteria.y4ztlxs.mongodb.net/?retryWrites=true&w=majority`
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
