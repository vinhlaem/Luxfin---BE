const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const account = {};
account.mongoose = mongoose;
account.url = dbConfig.url;
account.account = require("./account.model.js")(mongoose);

module.exports = account
