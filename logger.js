import { createLogger, format, transports } from "winston";
import "winston-mongodb";

export const sillylogger = createLogger({
    lavel : 'silly', // Log darajasi
    format : format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint(),
        format.colorize({ all : true})
    ),
    transports : [
        new transports.Console(), // Konsolga loglash
        // new transports.File({ filename : 'application.log'}),
        new transports.MongoDB({
            lavel : "silly",
            db : 'mongodb://localhost:27017/logs',
            collection : "silly",
            options : { useUnifiedTopology : true }
        })
    ],
});
