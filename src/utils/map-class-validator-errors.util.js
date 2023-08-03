"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapClassValidatorErrors = void 0;
const mapClassValidatorErrors = (errors) => {
    return errors.map(({ constraints = {} }) => ({
        message: Object.values(constraints)[0]
    }));
};
exports.mapClassValidatorErrors = mapClassValidatorErrors;
