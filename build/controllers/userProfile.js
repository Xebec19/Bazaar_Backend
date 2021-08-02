"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
/**
 * @param req
 * @route /api/user/profile
 * @type GET
 * @desc It allows user to see his profile
 */
var profile = function (req, res) {
    res.status(202).json({ message: "Hello from profile" });
};
exports.profile = profile;
