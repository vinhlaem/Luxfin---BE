module.exports = app => {
    const monthStart = require("../controllers/monthstart.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create-monthstart", monthStart.create);
  
    // Retrieve all Tutorials
    router.get("/monthstart", monthStart.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/monthstart/:id", monthStart.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use("/api", router);
  };