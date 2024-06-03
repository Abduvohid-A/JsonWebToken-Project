import { logger } from "../../logger.js";

export const loggerMiddleware = async (req, res, next) => {
    const log = `Request method: ${req.method} Request url: ${req.url}`;
    logger.http(log);
    next();
};
























