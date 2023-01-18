const moneyIn = require('../models/moneyinModel')
const MoneyIn = moneyIn.moneyin;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.source ) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

  // Create a Tutorial
  const moneyIn = new MoneyIn({
    idAccount:req.body.idAccount,
    amountVND:req.body.balanceVND,
    amountUSD:req.body.balanceUSD,
    total:req.body.total,
    reason: req.body.reason,
    date: req.body.date
  });

  // Save Tutorial in the database
  moneyIn
    .save(moneyIn)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {
      const idAccount = req.query.source;
      var condition = idAccount ? { idAccount: { $regex: new RegExp(idAccount), $options: "i" } } : {};
    
      MoneyIn.find(condition)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
    };