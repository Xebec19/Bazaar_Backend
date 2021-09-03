import { Request, Response } from "express";
import db from '../libs/database';
import Logger from "../libs/logger";
import bcrypt from 'bcryptjs'
/**
 * 
 * @param email 
 * @returns true or false depending on whether email is right or not
 * @desc checkes email structure
 * TODO to also pass email with custom domain and ending with country like user@domain.com.in
 */
const testEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * @param req name,email,password
 * @param res user id
 * @route /api/public/register
 * @type POST
 ** It allows user to sign up, uses {@link testEmail} to check provided email has right structure
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
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async function (err, hash) {
                const id = await db.one('INSERT INTO bazaar_users(first_name,last_name,email,phone,password) VALUES($1,$2,$3,$4,$5) returning user_id', [firstName, lastName, email, phone, hash]);
                res.status(202).json({ message: "User registered successfully", data: id }).end();
            });
        });
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
 * @param  {Request} req email,password
 * @param  {Response} res user {Object}
 * @route /api/public/login
 * @type POST
 * @desc It allows user to sign in
 */
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401).json({ status: false, message: 'Invalid email or password', data: null }).end();
        return;
    }
    let user: any;
    try {
        user = await db.one('SELECT * FROM bazaar_users WHERE email = $1 LIMIT 1', [email]);
        if (!user.user_id) {
            throw "No user found!";
            return;
        }
        Logger.info('--user ', user);
    }
    catch (error) {
        Logger.error(`while logging user : ${error}`);
        res.status(401).json({ status: false, message: 'Invalid credentials', data: null }).end();
        return;
    }
    try {
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                Logger.error(err);
                throw "--error occurred while comparing password";
            }
            if (!result) {
                throw "--password mismatch";
            }
            res.status(200).json({ status: true, message: 'Fetched User', data: user }).end();
        });
    }
    catch (error) {
        Logger.error(`--error while logging user : ${error}`);
        res.status(401).json({ status: false, message: 'Invalid credentials', data: null }).end();
        return;
    }
}
