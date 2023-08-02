import { Request } from "express";
import { Response } from "../models/response.type";

export const sendStatus = (statusCode: number = 200, rewrite: boolean = true) => (_: Request, res: Response<unknown>) => {
    const status = rewrite
        ? statusCode
        : res.statusCode || statusCode; 

    res.sendStatus(status);
} 