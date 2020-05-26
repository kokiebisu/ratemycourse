import App from './app';

import * as express from 'express';

import path from 'path';
import mongoose from 'mongoose';

import { loggerMiddleware } from './middlewares/logger';
import CourseController from './controllers/courseController';

const app = new App();

/**
 * Configuration Keys
 */
const keys = require('./config/keys');

const PORT = parseInt(process.env.PORT) || 5000;

app.listen(PORT);
