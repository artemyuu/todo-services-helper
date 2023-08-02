import { NextFunction, Request } from "express";
import { Response } from "../models/response.type";
export declare const ifError: (errorCode?: number) => (_: Request, res: Response<unknown>, next: NextFunction) => void;
