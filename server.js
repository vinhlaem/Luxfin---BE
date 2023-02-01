// const express = require("express");
// const cors = require("cors");

// const dotenv = require("dotenv")

// const connectDB = require("./app/config/db.config")
// const app = express();

// dotenv.config()
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// connectDB();

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Luxfin application." });
// });

// require("./app/routes/account.routes")(app);
// require("./app/routes/transaction.routes")(app);



// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./app/config/db.config');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Luxfin application." });
});

require("./app/routes/account.routes")(app);
require("./app/routes/transaction.routes")(app);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

