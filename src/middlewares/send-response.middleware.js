"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
/**
 * @deprecated
 */
const sendResponse = (successCode = 200, errorCode = 400) => (_, res) => {
    const statusCode = res.locals.databaseResponse.errors
        ? errorCode
        : successCode;
    res.status(statusCode);
    res.locals.serviceResponse = res.locals.databaseResponse.errors || res.locals.databaseResponse.result;
    res.locals.serviceResponse
        ? res.json(res.locals.serviceResponse)
        : res.json();
};
exports.sendResponse = sendResponse;
