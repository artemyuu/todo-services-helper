import { Request } from "express";
import { Response } from "../models/response.type";

export const sendJson = (_: Request, res: Response<unknown>) => {
    res.json(res.locals.serviceResponse);
} 