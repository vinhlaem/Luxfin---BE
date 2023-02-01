module.exports = app => {
    const account = require("../controllers/account.controller");
  
    var router = require("express").Router();
  
    router.post("/create-account", account.create);
  
    router.get("/accounts", account.findAll);
  
    router.get("/account/:id", account.findOne);
  
    app.use("/api", router);
  };