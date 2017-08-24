// NPM packages
const express = require('express');
const override = require('method-override');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');
const exphbs = require('express-handlebars');

// Establish port
const port = process.env.PORT || 8000;

// Establish express instance
const app = express();

// Serve static content for the app from 'public' directory in the application directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(override("_method"));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access
const routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.listen(port, () => {
  console.log('App is listening on ' + port);
});