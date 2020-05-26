import App from './app';

import * as express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = new App({
  port: parseInt(process.env.PORT) || 5000,
  controllers: [new CourseController()],
  middlewares: [cors(), express.json()],
});

/**
 * Configuration Keys
 */
const keys = require('./config/keys');

/**
 * Models
 */
require('./models/Course');

/**
 * Routers
 */
const courseRouter = require('./routes/courseRoutes');

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

app.listen();
