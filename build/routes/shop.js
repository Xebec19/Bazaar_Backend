"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var shop_1 = require("../controllers/shop");
var router = express_1.default.Router();
router.post('/items', function (req, res) { return shop_1.shopItemList(req, res); });
module.exports = router;
