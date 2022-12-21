const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
// 127.0.0.1 -> if database don't appear in compass.
mongoose.connect("mongodb://localhost/author_task", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


