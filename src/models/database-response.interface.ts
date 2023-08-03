import { Error } from "./database-error.interface";

export interface DatabaseResponse<T> {
    result: T;
    errors: Error[];
}