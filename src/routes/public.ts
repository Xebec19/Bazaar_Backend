import express from 'express'
import { Request, Response } from 'express-serve-static-core';
import { login, register } from "../controllers/auth";
const router = express.Router();

router.post('/login', (req: Request, res: Response) => login(req, res));

router.post('/register', (req: Request, res: Response) => register(req, res));

module.exports = router;