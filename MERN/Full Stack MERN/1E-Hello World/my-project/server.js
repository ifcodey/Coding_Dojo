const express = require("express");
const cors = require("cors"); // This is new
const app = express();

app.use(cors()); // This is new
require("./server/routes/person.routes")(app);
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
