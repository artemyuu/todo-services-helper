import { ValidationError } from "class-validator";
import { Error } from "../models";
export declare const mapClassValidatorErrors: (errors: ValidationError[]) => Error[];
