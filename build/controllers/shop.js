"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopItemList = void 0;
/**
 * @param req
 * @route /api/shop/items
 * @type GET
 * @desc It shows all products in random order
 */
var shopItemList = function (req, res) {
    res.status(202).json({ message: "Hello from Shop" });
};
exports.shopItemList = shopItemList;
