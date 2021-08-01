import { Request, Response } from "express";

/**
 * @param req 
 * @route /api/cart/addItem
 * @type POST
 * @desc It adds a product into users cart
 */
export const cartAddItem = (req: Request, res: Response) => {
    res.status(202).json({ message: "Hello from cart" });
}