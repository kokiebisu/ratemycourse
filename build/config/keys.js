"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
const dev_1 = __importDefault(require("./dev"));
const prod_1 = __importDefault(require("./prod"));
class Keys {
    constructor() {
        this.selectKeys();
    }
    selectKeys() {
        if (process.env.NODE_ENV === 'production') {
            this.mongoURI = prod_1.default.mongoURI;
        }
        else {
            this.mongoURI = dev_1.default.mongoURI;
        }
    }
    getKeys() {
        return this.mongoURI;
    }
}
exports.Keys = Keys;
//# sourceMappingURL=keys.js.map