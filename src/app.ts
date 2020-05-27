import express = require('express');
import mongoose = require('mongoose');
import { Application } from 'express';

import cors from 'cors';
import { loggerMiddleware } from './middlewares/logger';

import { Routes } from './routes';

import { Keys } from './config/keys';

class App {
  public app: Application;
  public routePrv: Routes = new Routes();
  private keys: Keys = new Keys();

  constructor() {
    this.app = express();
    this.connectMiddlewares();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private connectMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(loggerMiddleware);
  }

  private mongoSetup() {
    mongoose
      .connect(this.keys.getKeys(), {
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
