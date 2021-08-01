import { Request, Response } from "express";

/**
 * @param req 
 * @route /api/order/checkout
 * @type POST
 * @desc It allows user to place an order
 */
export const orderCheckout = (req: Request, res: Response) => {
    res.status(202).json({ message: "Hello from order" });
}