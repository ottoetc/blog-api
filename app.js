const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/blog';
const db = pgp(connection);

const port = process.env.PORT || 8080;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', router);

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

router.get('/posts/:id', function (req, res, next) {
  let postId = parseInt(req.params.id);
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

router.post('/posts', function (req, res, then) {
  db.none('insert into posts(title, content) values(${title}, ${content})', req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Posted a blog post'
        });
    }).catch(function (err) {
      return next(err);
    });
});

// In the future this should be .patch because it doesn't force updating all fields http://restful-api-design.readthedocs.io/en/latest/methods.html
router.put('/posts/:id', function (req, res, next) {
  let updatedPost = {
    title: req.body.title,
    content: req.body.content,
    id: parseInt(req.params.id)
  };
  db.none('update posts set title=${title}, content=${content} where id=${id}', updatedPost)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Put new data in a post'
        });
    }).catch(function (err) {
      return next(err);
    });
});

router.delete('/posts/:id', function (req, res, next) {
  let postId = parseInt(req.params.id);
  db.result('delete from posts where id = $1', postId)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Deleted ${result.rowCount} post`
        });
    }).catch(function (err) {
      return next(err);
    });
});


app.listen(port);
console.log('API is listening on localhost:' + port);
