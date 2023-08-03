import { Request } from "express";
import { Response } from "../models";
/**
 * @deprecated
 */
export declare const sendResponse: (successCode?: number, errorCode?: number) => (_: Request, res: Response<unknown>) => void;
