const express = require("express");
const cors = require("cors");
require("dotenv").config;

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

//Routes
app.use("/api", require("./routes"));

//Enable cors
app.use(cors());

app.listen(PORT, HOST, () =>
  console.log(`Server is running ${HOST} on port ${PORT}`)
);
