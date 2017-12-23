const express = require('express');
const port = process.env.PORT || 4000;

// Create an express server
const app = express();
app.set('view engine', 'ejs');


// Routes
const routes = require('./routes');

const path = require('path');
// To serve static assets
app.use(express.static(path.join(__dirname, 'public')));
// home
app.get('/', routes.home);

// movie_single
app.get('/narnia_episode/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);


// Start server
app.listen(port);