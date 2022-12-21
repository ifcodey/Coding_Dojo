const express = require("express");
const cors = require("cors");
const app = express();

require("./server/routes/person.routes")(app);
require("./server/config/mongoose.config"); // This is new

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
