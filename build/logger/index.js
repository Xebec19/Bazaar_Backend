"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var logger = null;
if (process.env.NODE_ENV !== 'production') {
    logger = config_1.loggerConfig();
}
exports.default = logger;
