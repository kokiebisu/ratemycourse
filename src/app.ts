import express = require('express');
import mongoose = require('mongoose');
import { Application } from 'express';

import cors from 'cors';
import { loggerMiddleware } from './middlewares/logger';

import { Routes } from './routes';

class App {
  public app: Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.connectMiddlewares();
    this.routePrv.routes(this.app);
  }

  private connectMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(loggerMiddleware);
  }

  private mongoSetup() {
    mongoose
      .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Successfully connected to database...'))
      .catch((error) => console.log(error));
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App is listening on http://localhost:${port}`);
    });
  }
}

export default App;
