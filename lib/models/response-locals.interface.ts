import { DatabaseResponse } from "./database-response.interface";
import { ServiceResponse } from "./service-response.interface";

export interface ResponseLocals<T> {
    databaseResponse: DatabaseResponse<T>;
    serviceResponse: ServiceResponse;
}