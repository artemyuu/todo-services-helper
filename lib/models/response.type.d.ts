import { Response as ExpressResponse } from "express";
import { ResponseLocals } from "./response-locals.interface";
export type Response<T> = ExpressResponse<unknown, ResponseLocals<T>>;
