// Create a web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import models
const Comment = require('./models/comment');

// Create express app
const app = express();

// Configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Connect to database
mongoose.connect('mongodb://localhost:27017/comments');

// Create endpoints
app.get('/comments', (req, res) => {
  Comment.find()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.status(500).send('Error: ' + err);
    });
});

app.get('/comments/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(500).send('Error: ' + err);
    });
});

app.post('/comments', (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment,
  });

  comment
    .save()
    .then(() => {
      res.send('Comment successfully added');
    })
    .catch((err) => {
      res.status(500).send('Error: ' + err);
    });
});

app.put('/comments/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      comment.name = req.body.name;
      comment.comment = req.body.comment;
      comment
        .save()
        .then(() => {
          res.send('Comment successfully updated');
        })
        .catch((err) => {
          res.status(500).send('Error: ' + err);
        });
    })
    .catch((err) => {
      res.status(500).send('Error: ' + err);
    });
});

app.delete('/comments/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Comment successfully deleted');
    })
    .catch((err) => {
      res.status(500).send('Error: ' + err);
    });
});

// Start listening
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});