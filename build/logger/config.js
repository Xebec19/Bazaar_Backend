"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = void 0;
var winston_1 = __importDefault(require("winston"));
var winston_2 = require("winston");
var combine = winston_2.format.combine, timestamp = winston_2.format.timestamp, label = winston_2.format.label, prettyPrint = winston_2.format.prettyPrint;
var loggerConfig = function () {
    return winston_1.default.createLogger({
        level: 'info',
        // defaultMeta: { service: 'user-service' },
        format: combine(label({ label: 'right meow!' }), timestamp(), prettyPrint()),
        transports: [
            //
            // - Write all logs with level `error` and below to `error.log`
            // - Write all logs with level `info` and below to `combined.log`
            //
            new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
            new winston_1.default.transports.File({ filename: 'combined.log' }),
        ],
    });
};
exports.loggerConfig = loggerConfig;
