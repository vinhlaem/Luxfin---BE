const mounthStart = require('../models/monthstartModel')
const MonthStart = mounthStart.monthStart;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.source ) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

  // Create a Tutorial
  const monthStart = new MonthStart({
    source: req.body.source,
    account: req.body.account,
    balanceVND:req.body.balanceVND,
    balanceUSD:req.body.balanceUSD,
    total:req.body.total,
    
  });

  // Save Tutorial in the database
  monthStart
    .save(monthStart)
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
      const source = req.query.source;
      var condition = source ? { source: { $regex: new RegExp(source), $options: "i" } } : {};
    
      MonthStart.find(condition)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving account."
          });
        });
    };

exports.findOne = (req, res) => {
        const id = req.params.id;
      
        MonthStart.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found account with id " + id });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: "Error retrieving account with id=" + id });
          });
      };    