const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb://localhost/team-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
