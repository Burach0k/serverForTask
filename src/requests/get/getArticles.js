const mongoose = require('mongoose');

const Users = mongoose.model('Article');
require('../../mongoModel/schema');
require('../../error/error');

const getAtricles = (req, res) => {
  let page = 1;
  let limit = 10;
  const articles = [];
  let count = '';

  if (Number(req.query.page) && req.query.page >= 0) page = Number(req.query.page);
  else {
    res.statusMessage = JSON.stringify(pageError);
    res.status(422).end();
  }
  if (req.query.limit)
    if (Number(req.query.limit) && req.query.limit < 11 && req.query.limit >= 0)
      limit = Number(req.query.limit);
    else {
      res.statusMessage = JSON.stringify(limitError);
      res.status(422).end();
    }

  Users.find({}).then((mas) => (count = mas.length));

  Users.find({})
    .sort({ created_at: -1 })
    .skip((page - 1) * 10)
    .limit(limit)
    .then((article) => {
      articles.push(...article);
    })
    .then(() => {
      const newObj = {
        count,
        page,
        limit,
        articles,
      };
      res.json(newObj);
    });
};

module.exports = getAtricles;
