"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifError = void 0;
const ifError = (errorCode = 400) => (_, res, next) => {
    if (res.locals.databaseResponse.errors) {
        res.status(errorCode);
        res.locals.serviceResponse = res.locals.databaseResponse.errors;
    }
    else {
        res.locals.serviceResponse = res.locals.databaseResponse.result;
    }
    next();
};
exports.ifError = ifError;
