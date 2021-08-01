import express from 'express'
import { Request, Response } from 'express';
import { cartAddItem } from '../controllers/cart';

const router = express.Router();
// express().use((req,res,next) => {
//     console.log('--Check');
//     next();
// });
router.post('/addItem', (req: Request, res: Response) => cartAddItem(req, res));

module.exports = router;