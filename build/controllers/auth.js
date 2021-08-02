"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
/**
 * @param req email,password
 * @route /api/public/login
 * @type POST
 * @desc It allows user to sign in
 */
var login = function (req, res) {
    res.status(202).json({ message: "Hello" });
};
exports.login = login;
/**
 * @param req name,email,password
 * @route /api/public/register
 * @type POST
 * @desc It allows user to sign up
 */
var register = function (req, res) {
    res.status(202).json({ message: "hello" });
};
exports.register = register;
