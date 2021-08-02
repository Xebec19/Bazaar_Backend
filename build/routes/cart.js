"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cart_1 = require("../controllers/cart");
var router = express_1.default.Router();
// express().use((req,res,next) => {
//     console.log('--Check');
//     next();
// });
router.post('/addItem', function (req, res) { return cart_1.cartAddItem(req, res); });
module.exports = router;
