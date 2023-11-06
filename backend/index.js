const health = require("./routes");
const user = require("./routes/user");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// connecting to database
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to the db...");
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

// routes
app.use("/", health);
app.use("/api/user", user);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
