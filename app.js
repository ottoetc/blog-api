const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello from the API');
});

router.get('/posts', function (req, res) {
  res.send('GET all blog posts');
});

router.get('/posts/:id', function (req, res) {
  res.send('GET single blog post');
});

router.post('/posts', function (req, res) {
  res.send('POST create blog post');
});

router.put('/posts/:id', function (req, res) {
  res.send('PUT update a blog post');
});

router.delete('/posts/:id', function (req, res) {
  res.send('DELETE a blog post');
});

app.use('/api/v1/', router);

app.listen(port);
console.log('API is listening on localhost:' + port);
