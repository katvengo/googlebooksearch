const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


const mongoose = require('mongoose')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

mongoose.connect(
  process.env.MONGODB_URI || 
   "mongodb://katvengo:Horses100@ds135217.mlab.com:35217/heroku_tx0dp1xj",
   { useNewUrlParser: true }
  );


mongoose.set('useFindAndModify', false);
mongoose.set('debug', true)

var routes = require("./controller/book_controller.js");

app.use(routes);

// Define API routes here

// Send every other request to the React app

// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});