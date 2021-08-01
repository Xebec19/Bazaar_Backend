import express from 'express'
import { Request, Response } from 'express';
import { profile } from '../controllers/userProfile';
const router = express.Router();

router.post('/profile', (req: Request, res: Response) => profile(req, res));

module.exports = router;