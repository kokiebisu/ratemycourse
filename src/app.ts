import * as express from 'express';
import { Application } from 'express';

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middlewares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
    this.assets();
  }

  private middlewares(middlewares: {
    forEach(arg0: (middleware: any) => void);
  }) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private routes(controllers: { forEach(arg0: (controller: any) => void) }) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private assets() {
    this.app.use(express.static('public'));
    //   this.app.use(express.static('views'))
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is listening on http://localhost:${this.port}`);
    });
  }
}

export default App;
