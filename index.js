require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use("/", routes);

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
