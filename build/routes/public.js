"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = require("../controllers/auth");
var router = express_1.default.Router();
router.post('/login', function (req, res) { return auth_1.login(req, res); });
router.post('/register', function (req, res) { return auth_1.register(req, res); });
module.exports = router;
