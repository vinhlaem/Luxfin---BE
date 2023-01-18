const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const moneyin = {};
moneyin.mongoose = mongoose;
moneyin.url = dbConfig.url;
moneyin.moneyin = require("./moneyin.model.js")(mongoose);

module.exports = moneyin
