import { Request } from "express";
import { Response } from "../models/response.type";
export declare const sendStatus: (statusCode?: number, rewrite?: boolean) => (_: Request, res: Response<unknown>) => void;
