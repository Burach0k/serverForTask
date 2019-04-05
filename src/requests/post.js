const mongoose = require('mongoose');
require('../mongoModel/schema');
require('../error/error');

const Users = mongoose.model('Article');

const post = (req, res) => {
  const { title, body } = req.body;
  const newArticle = {};
  if (title && body) {
    newArticle.title = title;
    newArticle.body = body;
    const user = new Users(newArticle);
    user.save();
    res.statusMessage = JSON.stringify(user);
    res.status(200).end();
  } else {
    if (!title) res.statusMessage = JSON.stringify(titleError);
    if (!body) res.statusMessage = JSON.stringify(bodyError);
    res.status(422).end();
  }
};

module.exports = post;
