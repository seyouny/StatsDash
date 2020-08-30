const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models"); // used in router
const routes = require("./routes/cod-route"); // api routes for db

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//=======================================================================
// This section was per instructions for using MongoDB
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//   console.log("App connected to JAWS and listening on PORT " + "http://localhost:" + PORT);
// } else {
//   connection = mysql.createConnection({
//     host: 'dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'sbbg3zakw7rqxuc7',
//     password: 'upgtoueg3fmejp2b',
//     database: 'zlr8wau3cuiweniv'
//   });
// };
//=======================================================================

//This section comes from instructions for deploying with Sequelize to Heroku
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + "http://localhost:" + PORT);
  });
});