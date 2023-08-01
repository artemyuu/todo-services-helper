import { DatabaseError } from "./database-error.interface";

export interface DatabaseResponse<T> {
    result: T;
    errors: DatabaseError[];
}