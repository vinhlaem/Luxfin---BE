const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const transaction = {};
transaction.mongoose = mongoose;
transaction.url = dbConfig.url;
transaction.transaction = require("./transaction.model.js")(mongoose);

module.exports = transaction
