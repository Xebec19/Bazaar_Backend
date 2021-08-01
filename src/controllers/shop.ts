import { Request, Response } from "express";

/**
 * @param req 
 * @route /api/shop/items
 * @type GET
 * @desc It shows all products in random order
 */
export const shopItemList = (req: Request, res: Response) => {
    res.status(202).json({ message: "Hello from Shop" });
}