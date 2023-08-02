"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendStatus = void 0;
const sendStatus = (statusCode = 200, rewrite = true) => (_, res) => {
    const status = rewrite
        ? statusCode
        : res.statusCode || statusCode;
    res.sendStatus(status);
};
exports.sendStatus = sendStatus;
