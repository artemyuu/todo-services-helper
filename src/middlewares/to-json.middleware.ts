import { Request } from "express";
import { Response } from "../models/response.type";

export const toJson = (_: Request, res: Response<unknown>) => {
    res.json(res.locals.serviceResponse);
} 