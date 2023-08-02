"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJson = void 0;
const sendJson = (_, res) => {
    res.json(res.locals.serviceResponse);
};
exports.sendJson = sendJson;
