const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const post = require('./requests/post');
const getArticle = require('./requests/get/getArticle');
const put = require('./requests/put');
const getArticles = require('./requests/get/getArticles');
const access_control = require('./middlewares/middlewares');
require('./mongoModel/schema');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(access_control);

mongoose
  .connect('mongodb://Articles:1234qwe@ds149885.mlab.com:49885/sessions', { useNewUrlParser: true })
  .then(() => {
    console.log('------Connection-----');
  })
  .catch(console.log);

app.get('/v1/articles/:id', getArticle);

app.get('/v1/articles', getArticles);

app.put('/v1/articles/:id', put);

app.post('/v1/articles', post);

app.listen(port);
