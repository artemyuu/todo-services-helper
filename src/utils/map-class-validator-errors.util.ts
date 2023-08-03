import { ValidationError } from "class-validator";
import { Error } from "../models";

export const mapClassValidatorErrors = (errors: ValidationError[]): Error[] => {
    return errors.map(({ constraints = {} }) => ({
            message: Object.values(constraints)[0]
        })
    );
}