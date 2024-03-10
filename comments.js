// Create web server
// Use the express library to create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve our API
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { body } = req;
  comments.push(body);
  res.json({ message: 'Comment added' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

### 3.3.2. Create a front-end app
We will create a front-end app using the Vue.js framework. Vue.js is a progressive JavaScript framework that is used to build user interfaces. We will use Vue.js to create a simple web page to display the comments and allow the user to add a new comment.

First, we need to create an HTML file to hold the front-end app. Create a new file called `index.html` with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comment App</title>
  <link rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
  <div id="app" class="container">
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments">{{ comment.name }}: {{ comment.message }}</li>
    </ul>
    <form @submit="addComment">
      <div class="form-group 