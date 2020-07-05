const db = require("../models");

// define methods for booksController

module.exports = {
  //   =========================================
  // find all books method

  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  //   =========================================
  // Find book by id method
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  //   =========================================
  //   Create book method
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  //   =========================================
  // update book method
  update: function (req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  //   =========================================
  //   delete book method
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
