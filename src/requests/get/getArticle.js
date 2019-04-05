const mongoose = require('mongoose');

const Users = mongoose.model('Article');
require('../../mongoModel/schema');
require('../../error/error');

const getArticle = (req, res) => {
  Users.findById(req.params.id)
    .then((article) => {
      res.json(article);
    })
    .catch(() => {
      res.statusMessage = JSON.stringify(notFound);
      res.status(404).end();
    });
};

module.exports = getArticle;
