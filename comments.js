// Create a webserver
// Listen for a GET request on the path /comments
// Send back a response with a status code of 200 and the following JSON object as the body: { comments: [] }
// Listen for a POST request on the path /comments
// Send back a response with a status code of 201 and an empty body

const express = require("express");
const app = express();

app.get("/comments", (req, res) => {
  res.status(200).json({ comments: [] });
});

app.post("/comments", (req, res) => {
  res.status(201).send();
});

app.listen(8080);