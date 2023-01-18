const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const monthStart = {};
monthStart.mongoose = mongoose;
monthStart.url = dbConfig.url;
monthStart.monthStart = require("./monthstart.model.js")(mongoose);

module.exports = monthStart
