import { Request, Response } from "express";

/**
 * @param req email,password
 * @route /api/public/login
 * @type POST
 * @desc It allows user to sign in
 */
export const login = (req: Request, res: Response) => {
    res.status(202).json({ message: "Hello" });
}

/**
 * @param req name,email,password
 * @route /api/public/register
 * @type POST
 * @desc It allows user to sign up
 */
export const register = (req: Request, res: Response) => {
    res.status(202).json({ message: "hello" });
}