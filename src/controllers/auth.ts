import { Request, Response } from 'express'
import Logger from '../libraries/winston.logger'
import bcrypt from 'bcryptjs'
import db from '../libraries/database.connection';

/**
 * @param password 
 * @returns hash
 ** encrypts password using bcryptjs
 */
const hashPassword = async(password:string) => {
    await bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) return false;
            return hash;
        });
        return false;
    });
} 

/**
 * @param req email,password
 * @route /api/public/login
 * @type POST
 * @desc It allows user to sign in
 */
export const login = (req: Request, res: Response) => {
    const {email,password} = req.body;
    try{
    const hash = hashPassword(password);
    if(!hash) throw "Error occurred while encrypting password";
    res.status(202).json({ message: hash }).end();
    }
    catch(error){
        Logger.error(error);
        res.status(401).json({message: "Error occurred while logging user in"}).end();
    }
}

/**
 * @param req name,email,password
 * @route /api/public/register
 * @type POST
 * @desc It allows user to sign up
 */
export const register = (req: Request, res: Response) => {
    res.status(202).json({ message: "hello" }).end();
}