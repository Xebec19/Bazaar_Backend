"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartAddItem = void 0;
/**
 * @param req
 * @route /api/cart/addItem
 * @type POST
 * @desc It adds a product into users cart
 */
var cartAddItem = function (req, res) {
    res.status(202).json({ message: "Hello from cart" });
};
exports.cartAddItem = cartAddItem;
