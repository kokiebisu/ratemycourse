import express = require('express');
import { Application } from 'express';

import cors from 'cors';

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
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App is listening on http://localhost:${port}`);
    });
  }
}

export default App;
