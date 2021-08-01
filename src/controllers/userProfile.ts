import { Request, Response } from "express";

/**
 * @param req 
 * @route /api/user/profile
 * @type GET
 * @desc It allows user to see his profile
 */
export const profile = (req: Request, res: Response) => {
    res.status(202).json({ message: "Hello from profile" });
}