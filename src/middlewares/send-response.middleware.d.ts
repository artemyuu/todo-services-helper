import { Response } from "../models";
export declare const sendResponse: (successCode?: number, errorCode?: number) => (_: Request, res: Response<unknown>) => void;
