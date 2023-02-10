const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./app/config/db.config");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Luxfin application." });
});

require("./app/routes/account.routes")(app);
require("./app/routes/transaction.routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
