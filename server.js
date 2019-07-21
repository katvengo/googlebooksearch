const express = require("express");
const mongoose = require('mongoose')
const routes = require("./routes");
const path = require("path")
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config()

const USERINFO = process.env.USERINFO

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client" , "build")));
// } 

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 
   `mongodb://${USERINFO}@ds353457.mlab.com:53457/heroku_3ht04m3d`,
   { useNewUrlParser: true }
  );


mongoose.set('useFindAndModify', false);
mongoose.set('debug', true)

// Define API routes here

// Send every other request to the React app

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
