import { ErrorRequestHandler } from "express";

export const errorHandle: ErrorRequestHandler = (error, req, res, next) => {
    res.json(error);
};