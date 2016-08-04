const express = require('express');
const cors = require('cors');
const app = express();
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/blog';
const db = pgp(connection);

const port = process.env.PORT || 8080;
const router = express.Router();

// Middleware to enable CORS
app.use(cors());

// Middleware to accept JSON as part of the URL request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

// Routes makes all routes accessible on the /api/v1/ route
app.use('/api/v1/', router);

// GET all blog posts
router.get('/posts', function (req, res, next) {
  db.any('select * from posts')
    .then(function (data) {
      res.status(200)
        .json({
          posts: data,
        });
    }).catch(function (err) {
      return next(err);
    });
});

// GET single blog post by ID
router.get('/posts/:id', function (req, res, next) {
  let postId = parseInt(req.params.id);
  db.one('select * from posts where id = $1', postId)
    .then(function (data) {
      res.status(200)
        .json({
          posts: data,
        });
    }).catch(function (err) {
      return next(err);
    });
});

// POST a new blog post
router.post('/posts', function (req, res, next) {
  db.one('insert into posts(title, content) values(${title}, ${content}) returning id', req.body.post)
    .then(function (data) {
      res.status(200)
        .json({
          posts: data,
        });
    }).catch(function (err) {
      return next(err);
    });
});

// PUT update a blog post by ID
router.put('/posts/:id', function (req, res, next) {
  console.log("PARAMS: ", req.params);
  let updatedPost = {
    title: req.body.post.title,
    content: req.body.post.content,
    id: parseInt(req.params.id)
  };
  db.none('update posts set title=${title}, content=${content} where id=${id}', updatedPost)
    .then(function () {
      res.status(200)
        .json({
        });
    }).catch(function (err) {
      return next(err);
    });
});

// DELETE a blog post by ID
router.delete('/posts/:id', function (req, res, next) {
  let postId = parseInt(req.params.id);
  db.result('delete from posts where id = $1', postId)
    .then(function (result) {
      res.status(200)
        .json({
        });
    }).catch(function (err) {
      return next(err);
    });
});

app.listen(port);
console.log('API is listening on localhost:' + port);
