const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // Serve statuc files from the React frontend app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Anything that doesn't match the above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

module.exports = app;
