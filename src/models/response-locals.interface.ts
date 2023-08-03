import { DatabaseResponse } from "./database-response.interface";
import { ServiceResponse } from "./service-response.interface";

/**
 * @deprecated
 */
export interface ResponseLocals<T> {
    databaseResponse: DatabaseResponse<T>;
    serviceResponse: ServiceResponse;
}