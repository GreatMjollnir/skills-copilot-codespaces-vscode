// Create web server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Array of comments
const comments = [
  {
    id: 1,
    comment: 'Hello, World!'
  },
  {
    id: 2,
    comment: 'This is a comment'
  }
];

// GET method
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST method
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  const id = comments.length + 1;

  comments.push({ id, comment });

  res.json({ id, comment });
});

app.listen(port, () => {
  console.log('Server is running on port:', port);
});