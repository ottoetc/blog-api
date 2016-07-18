const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/blog';
const db = pgp(connection);

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello from the API');
});

router.get('/posts', function (req, res, next) {
  db.any('select * from posts')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Got all posts'
        });
    }).catch(function (err) {
      return next(err);
    });
});

router.get('/posts/:id', function (req, res) {
  let postId = parseInt(req.params.id);
  console.log("postId: ", postId);
  db.one('select * from posts where id = $1', postId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Got single post by id'
        });
    }).catch(function (err) {
      return next(err);
    });
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
