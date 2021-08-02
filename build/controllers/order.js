"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCheckout = void 0;
/**
 * @param req
 * @route /api/order/checkout
 * @type POST
 * @desc It allows user to place an order
 */
var orderCheckout = function (req, res) {
    res.status(202).json({ message: "Hello from order" });
};
exports.orderCheckout = orderCheckout;
