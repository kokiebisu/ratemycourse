const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

/**
 * Configuration Keys
 */
const keys = require('./config/keys');

/**
 * Routers
 */
const courseRouter = require('./models/Course');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * Database Connection
 */
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to database...'))
  .catch((error) => console.log(error));

/**
 * Serving Files
 */
if (process.env.NODE_ENV === 'production') {
  // Serve statuc files from the React frontend app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Anything that doesn't match the above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

/**
 * Routes
 */
app.use('/courses', courseRouter);

app.listen(PORT, () => console.log(`App is listening on ${PORT}...`));
