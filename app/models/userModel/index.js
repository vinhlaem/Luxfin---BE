const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./users.model.js")(mongoose);

module.exports = db;

// const dbs = {};
// dbs.mongoose = mongoose;
// dbs.url = dbConfig.url;
// dbs.monthStart = require("./monthstart.model.js")(mongoose);

// module.exports = dbs
