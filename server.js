const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
var db = require('./models'); // used in router
const routes = require('./routes/cod-route'); // api routes for db
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + 'http://localhost:' + PORT);
  });
});