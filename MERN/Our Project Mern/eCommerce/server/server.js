const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const useRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleWare");

const app = express();

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route Middleware
app.use("/api/users", useRoute);

//Router
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);

// connect to db and start server.
const PORT = process.env.PORT || 5000;

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
