import { Request, Response } from "express";
import db from '../libs/database';
import Logger from "../libs/logger";

const testEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * @param req name,email,password
 * @param res user id
 * @route /api/public/register
 * @type POST
 * @desc It allows user to sign up
 */
export const register = async (req: Request, res: Response) => {
    try {
        let { firstName, lastName, email, phone, password } = req.body;
        if (!email) { throw 'Invalid email' }
        email = email.trim();
        if (!(testEmail(email.trim()) && !!firstName && !!password)) {
            throw 'Invalid credentials';
        }
        const check = await db.one('SELECT count(user_id) FROM bazaar_users WHERE lower(email) LIKE lower($1)', ['%' + email + '%']);
        if (+check.count > 0) {
            throw 'Email already exists';
        }
        const id = await db.one('INSERT INTO bazaar_users(first_name,last_name,email,phone,password) VALUES($1,$2,$3,$4,$5) returning user_id', [firstName, lastName, email, phone, password]);
        res.status(202).json({ message: "User registered successfully", data: id }).end();
    }
    catch (error) {
        Logger.error(`${error}`);
        res.status(401).json({
            status: false, message: "Error while occured registering new user",
            data: `${error}`
        }).end();
    }
}

/**
 * @param req email,password
 * @param res user details
 * @route /api/public/login
 * @type POST
 * @desc It allows user to sign in
 */
export const login = async (req: Request, res: Response) => {
    Logger.debug('Fired');
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401).json({ status: false, message: 'Invalid email or password', data: null }).end();
        return;
    }
    try {
        const user = await db.one('SELECT user_id FROM bazaar_users WHERE email = $1 AND password = $2', [email, password]);
        res.status(200).json({ status: true, message: 'Fetched User', data: user }).end();
    }
    catch (error) {
        Logger.error(`while logging user : ${error}`);
        res.status(401).json({ status: false, message: 'Invalid credentials', data: null }).end();
    }
}
