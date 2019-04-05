const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Article;
