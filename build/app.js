"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const logger_1 = require("./middlewares/logger");
const routes_1 = require("./routes");
const keys_1 = require("./config/keys");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.keys = new keys_1.Keys();
        this.app = express();
        this.connectMiddlewares();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    connectMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors_1.default());
        this.app.use(logger_1.loggerMiddleware);
    }
    mongoSetup() {
        mongoose
            .connect(this.keys.getKeys(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log('Successfully connected to database...'))
            .catch((error) => console.log(error));
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`App is listening on http://localhost:${port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map