"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
exports.loggerMiddleware = (req, res, next) => {
    console.log('Request logged: ', req.method, req.path);
    next();
};
//# sourceMappingURL=logger.js.map