const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world---------------");
});

app.get("/about", function (req, res) {
  res.send("about");
});

// regular expression
app.get(/a/ , function(req,res){
    res.send("a");
})

app.get("ab?ab", function (req, res) {
  res.send("ab?ab");
});

app.listen(port, () =>
  console.log(`server running on http://  >>  localhost:${port}`)
);
