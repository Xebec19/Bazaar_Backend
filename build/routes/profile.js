"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userProfile_1 = require("../controllers/userProfile");
var router = express_1.default.Router();
router.post('/profile', function (req, res) { return userProfile_1.profile(req, res); });
module.exports = router;
