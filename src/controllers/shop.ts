import { Request, Response } from "express";
import db from '../libs/database';

/**
 * @param req 
 * @route /api/shop/items
 * @type GET
 * @desc It shows all products in random order
 */
export const shopItemList = async (req: Request, res: Response) => {
    const products = await db.one
    res.status(202).json({ message: "Hello from Shop" });
}