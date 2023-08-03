import { Response as ExpressResponse } from "express";
import { ResponseLocals } from "./response-locals.interface";
/**
 * @deprecated
 */
export type Response<T> = ExpressResponse<unknown, ResponseLocals<T>>;
