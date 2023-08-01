import { DatabaseError } from "./database-error.interface";

export type ServiceResponse = unknown | DatabaseError[]; 