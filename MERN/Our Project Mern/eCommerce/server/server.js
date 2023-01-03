const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// connect to db and start server.

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      // mongoose.set("strictQuery", false);
      console.log(`Server Running on porting :${PORT}`);
    })
  )
  .catch((err) => console.log(err));
