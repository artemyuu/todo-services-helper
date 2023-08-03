import { Request } from "express";
import { Response } from "../models";

/**
 * @deprecated
 */
export const sendResponse = (successCode: number = 200, errorCode: number = 400) => (_: Request, res: Response<unknown>) => {
    const statusCode = res.locals.databaseResponse.errors 
        ? errorCode
        : successCode;

    res.status(statusCode);
    res.locals.serviceResponse = res.locals.databaseResponse.errors || res.locals.databaseResponse.result;

    res.locals.serviceResponse
        ? res.json(res.locals.serviceResponse)
        : res.json();
}