"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
const toJson = (_, res) => {
    res.json(res.locals.serviceResponse);
};
exports.toJson = toJson;
