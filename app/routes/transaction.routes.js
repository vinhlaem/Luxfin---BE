module.exports = app => {
    const Transaction = require("../controllers/transaction.controller");
  
    var router = require("express").Router();

    router.post("/create-transaction", Transaction.create);

    router.get("/transactions", Transaction.findAll);
  
    app.use("/api", router);
  };