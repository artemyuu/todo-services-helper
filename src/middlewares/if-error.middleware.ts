import { NextFunction, Request } from "express";
import { Response } from "../models/response.type";

export const ifError = (errorCode: number = 400) => (_: Request, res: Response<unknown>, next: NextFunction) => {
    if(res.locals.databaseResponse.errors) {
        res.status(errorCode);
        res.locals.serviceResponse = res.locals.databaseResponse.errors;
    } else {
        res.locals.serviceResponse = res.locals.databaseResponse.result;
    }

    next();
} 