const mongoose = require("mongoose");

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

mongoose.connect(
  `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("db is now connected");
});
