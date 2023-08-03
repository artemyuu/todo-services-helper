"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = void 0;
const errorHandle = (error, req, res, next) => {
    res.json(error);
};
exports.errorHandle = errorHandle;
