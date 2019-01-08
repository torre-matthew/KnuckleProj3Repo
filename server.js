const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");

// Require all models
// const db = require("./models");

const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
// app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("app/build"));
}

// Connect to the Mongo DB

let databaseUri = "mongodb://localhost/pocketPantryDB"; 

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect(databaseUri);
}

// Connect to the Mongo DB
let db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log("Mongoose Connection Successful!!!");
});

// Routes
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/public/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
