const mongoose = require('mongoose');

const Users = mongoose.model('Article');
require('../mongoModel/schema');
require('../error/error');

const put = (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const newObj = {
    title: req.body.title,
    body: req.body.body,
    updated_at: new Date(),
  };

  if (newObj.title && newObj.body) {
    Users.findById(id)
      .then((model) => {
        return Object.assign(model, newObj);
      })
      .then((model) => {
        res.statusMessage = JSON.stringify(model);
        res.status(200).end();
        return model.save();
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    if (!newObj.title) res.statusMessage = JSON.stringify(titleError);
    if (!newObj.body) res.statusMessage = JSON.stringify(bodyError);
    res.status(422).end();
  }
};

module.exports = put;
